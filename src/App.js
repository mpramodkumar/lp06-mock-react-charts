import React, { Component } from 'react';
import { Button } from 'primereact/components/button/Button';
import logo from './logo.png';
import './App.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'font-awesome/css/font-awesome.css';
import { Chart } from 'primereact/components/chart/Chart';
import FusionCharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import PDFReader from "react-pdf-reader";
import "react-pdf-reader/dist/TextLayerBuilder.css";
import "react-pdf-reader/dist/PdfReader.css";
import { AutoComplete } from 'primereact/components/autocomplete/AutoComplete';
import { OrganizationChart } from 'primereact/components/organizationchart/OrganizationChart';

const PDF_URL = 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf'
class App extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      countriesData: [],
      data2: [],
      visible:false
    };
    this.filterBrands = this.filterBrands.bind(this);
    this.increment = this
      .increment
      .bind(this);
    charts(FusionCharts)
  }
  componentDidMount() {
    this.brands = ["Audi", "BMW", "Fiat", "Ford", "Honda", "Jaguar", "Mercedes", "Renault", "Volvo"];
  }

  filterBrands(event) {
    setTimeout(() => {
      let results;

      if (event.query.length === 0) {
        results = [...this.brands];
      }
      else {
        results = this.brands.filter((brand) => {
          return brand.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }

      this.setState({ filteredBrands: results });
    }, 250);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }
displaydata() {

/*var newSelected = Object.assign({}, this.state.data2);
newSelected = [];
var newData ={}
newData.label1 = 'F.C Barcelona';
newData.expanded = false;
newData.children = [];

var newChildData1 = {};
newChildData1.label2 = 'F.C Barcelona';
newChildData1.expanded = false;
newChildData1.children = [];

var newChildDataofChild1 = {};
newChildDataofChild1.label3 = 'Chelsea FC';
var newChildDataofChild2 = {};
newChildDataofChild2.label4 = 'F.C. Barcelona';
newChildData1.children.push(newChildDataofChild1);
newChildData1.children.push(newChildDataofChild2);

var newChildData2 = {};
newChildData2.label5 = 'Real Madrid';
newChildData2.expanded = false;
newChildData2.children = [];

var newChild2DataofChild1 = {};
newChild2DataofChild1.label6 = 'Bayern Munich';
var newChild2DataofChild2 = {};
newChild2DataofChild2.label7 = 'Real Madrid';
newChildData2.children.push(newChild2DataofChild1);
newChildData2.children.push(newChild2DataofChild2);

newData.children.push(newChildData1);
newData.children.push(newChildData2);
newSelected.push(newData);*/
this.setState({
  visible:true
})

  }

  renderOrganizationChat() {
    var data2 = [{
      label: 'F.C Barcelona',
      expanded: false,
      children: [
        {
          label: 'F.C Barcelona',
          expanded: false,
          children: [
            {
              label: 'Chelsea FC'
            },
            {
              label: 'F.C. Barcelona'
            }
          ]
        },
        {
          label: 'Real Madrid',
          expanded: false,
          children: [
            {
              label: 'Bayern Munich'
            },
            {
              label: 'Real Madrid'
            }
          ]
        }
      ]
    }];

    if (this.state.visible) {

      return (
        <OrganizationChart value={data2}></OrganizationChart>
      );
    } else {

      return null;
    }
  }
  render() {
    var data = {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
      ],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [
            65,
            59,
            80,
            81,
            56,
            55,
            40
          ]
        }, {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [
            28,
            48,
            40,
            19,
            86,
            27,
            90
          ]
        }
      ]
    };

    var myDataSource = {
      chart: {
        caption: "Harry's SuperMart",
        subCaption: "Top 5 stores in last month by revenue",
        numberPrefix: "INR "
      },
      data: [
        {
          label: "Bakersfield Central",
          value: "880000000000000"
        }, {
          label: "Garden Groove harbour",
          value: "7300000000000000"
        }, {
          label: "Los Angeles Topanga",
          value: "5900000000000000"
        }, {
          label: "Compton-Rancho Dom",
          value: "5200000000000000"
        }, {
          label: "Daly City Serramonte",
          value: "3300000000000000"
        }
      ]
    };

    var chartConfigs = {
      id: "revenue-chart",
      type: "doughnut3d",
      width: 1200,
      height: 500,
      dataFormat: "json",
      dataSource: myDataSource,
      events: {
        dataplotclick: function (ev, props) {
          document
            .getElementById("value")
            .innerHTML = props.displayValue;
        }
      }
    };
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to PrimeReact</h2>
        </div>
        <h3>Advanced</h3>
        <AutoComplete value={this.state.brand} onSelect={this.displaydata.bind(this)} suggestions={this.state.filteredBrands} completeMethod={this.filterBrands} size={30} minLength={1}
          placeholder="Hint: type 'v' or 'f'" dropdown={true} onChange={(e) => this.setState({ brand: e.value } )} />
        <span style={{ marginLeft: "50px" }}>Brand: {this.state.brand || "none"}</span>

        <h3>Basic</h3>
        <p>Hierarchical data with zero configuration.</p>
        {this.renderOrganizationChat()}
        <p>Number of Clicks: {this.state.data2}</p>
        <div className="App-intro">
          <Button label="Click" onClick={this.increment} />

          <p>Number of Clicks: {this.state.count}</p>
        </div>
        <div className="App-line-chart">
          <Chart type="bar" data={data} />
        </div>
        <div className="App-pie-chart">
          <ReactFC {...chartConfigs} />
        </div>
        <p className="message-box">The value that you have selected is:
          <span id="value">nothing</span>
        </p>

      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import {Button} from 'primereact/components/button/Button';
import logo from './logo.png';
import './App.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'font-awesome/css/font-awesome.css';
import {Chart} from 'primereact/components/chart/Chart';
import FusionCharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import PDFReader from "react-pdf-reader";
import "react-pdf-reader/dist/TextLayerBuilder.css";
import "react-pdf-reader/dist/PdfReader.css";

import DatePickerComponent from './DatePickerComponent';

const PDF_URL = 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf'
class App extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      createdDate: ''
    };
    this.increment = this
      .increment
      .bind(this);
    charts(FusionCharts)
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
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
          value: "8800000000000000"
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
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to PrimeReact</h2>
        </div>
        <div className="App-intro">
          <Button label="Click" onClick={this.increment}/>

          <p>Number of Clicks: {this.state.count}</p>
        </div>
        <div className="App-line-chart">
          <Chart type="bar" data={data}/>
        </div>
        <div className="App-pie-chart">
          <ReactFC {...chartConfigs}/>
        </div>
        <p className="message-box">The value that you have selected is:
          <span id="value">nothing</span>
        </p>

        <DatePickerComponent/>
      </div>
    );
  }
}

export default App;

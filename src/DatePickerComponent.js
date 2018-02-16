import React, {Component} from 'react';
import logo from './logo.png';

import {Calendar} from 'primereact/components/calendar/Calendar';
// import {Link} from 'react-router-dom';
// import {TabView,TabPanel} from 'primereact/components/tabview/TabView';

// import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import './DatePickerComponent.css';

class DatePickerComponent extends Component {
    constructor() {
        super();
        this.state = {
          createdDate: ''
        };
        this.handleChange = this
          .handleChange
          .bind(this);
    }
    
    handleChange(name, value) {
        this.setState({ createdDate: value });
    }
    
    render() {
        return (
        <div className="md-grid purchase-order-form__container">
            {/* {<DatePicker
                id="creationDate"
                label="Creation Date"
                onChange={value => this.handleChange('creationDate', value)}
                value={this.state.creationDate || null}
                className="md-cell md-cell--bottom purchase-order-form__input"
                required
            />} */}

            <div className="ui-g-12 ui-md-4">
                <h3>Navigators</h3>
                <Calendar value={this.state.createdDate} showIcon={logo} monthNavigator="true" yearNavigator="true" yearRange="2000:2030" onChange={(e) => this.setState({date5: e.value})}></Calendar>
            </div>

        </div>
        )
    }
}

export default DatePickerComponent;
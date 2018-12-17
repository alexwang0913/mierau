import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css'

import originalMoment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(originalMoment);


class FormDateRangePicker extends React.Component{
    constructor (props, context) {

    super(props, context);

    const today = moment();

    this.state = {
      isOpen: false,
      value: moment.range(today.clone().subtract(7, "days"), today.clone()),
      dates1: null,
    };

    this.onSelect1 = this.onSelect1.bind(this);
  }

  onSelect = (value, states) => {
    this.setState({ value, states });
  };

  onToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  renderSelectionValue = () => {
    return (
      <div>
        <div>Selection</div>
        <h5>
        {this.state.value.start.format("YYYY-MM-DD")}
        {" - "}
        {this.state.value.end.format("YYYY-MM-DD")}
        </h5>
      </div>
    );
  };

 handleSelect(range, states) {
    // range is a moment-range object
    this.setState({
      value: range,
      states: states,
    }); 
  }
  onSelect1(dates) {    this.setState({      dates1: dates    });  }
   
    render(){


        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Date Range Picker</h1>
                        </div>
                    </div>


                            




                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Date Range Picker</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-8 col-md-9 col-10">

                                        <div class="form-group">
                                            <label class="form-label" for="field-1">Basic</label>
                                            <div class="controls">
                                            <DateRangePicker
                                              onSelect1={this.onSelect1}
                                              value={this.state.dates1}
                                            />




                                            </div>
                                        </div>



<div>{this.renderSelectionValue()}</div>
 <div>
          <input className="btn"
            type="button"
            value="Toggle date picker"
            onClick={this.onToggle}
          />
        </div>

        {this.state.isOpen && (
          <DateRangePicker
            value={this.state.value}
            onSelect={this.onSelect}
            singleDateRange={true}
            firstOfWeek={1}
            numberOfCalendars={2}
            selectionType='range'
          />
        )}

                                    </div>
                                </div>


                            </div>
                        </section></div>


                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default FormDateRangePicker;

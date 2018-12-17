import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import DateRangePicker from 'react-daterange-picker'
import moment from 'moment-range';
import 'react-daterange-picker/dist/css/react-calendar.css'


class FormDateRangePicker extends React.Component{
    constructor (props) {
    super(props)
    this.state = {
        value: null,
      dates1: null,
    };
    this.onSelect1 = this.onSelect1.bind(this);
  }
 handleSelect(range, states) {
    // range is a moment-range object
    this.setState({
      value: range,
      states: states,
    }); 
  }
  onSelect1(dates) {    this.setState({      dates1: dates    });  }
   
    render(){



        const stateDefinitions = {
  available: {
    color: null,
    label: 'Available',
  },
  enquire: {
    color: '#ffd200',
    label: 'Enquire',
  },
  unavailable: {
    selectable: false,
    color: '#78818b',
    label: 'Unavailable',
  },
};


        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Timeline Centered</h1>
                        </div>
                    </div>


                            




                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Basic Elements</h2>
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
                                              onSelect={this.onSelect1}
                                              value={this.state.dates1}
                                            />


<DateRangePicker
        firstOfWeek={1}
        numberOfCalendars={2}
        selectionType='range'
        showLegend={true}
        value={this.state.value}
        onSelect={this.handleSelect} />

                                            </div>
                                        </div>






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

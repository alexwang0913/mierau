import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import DateTimePicker from 'react-datetime-picker';

class FormDateTimePicker extends React.Component{
    constructor (props) {
    super(props)
    this.state = {
      date: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {    this.setState({      date: date    });  }
   
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Date Time Picker</h1>
                        </div>
                    </div>


                            




                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Date Time Picker</h2>
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
                                            <DateTimePicker
                                                  onChange={this.handleChange}
                                                  value={this.state.date}
                                                />

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

export default FormDateTimePicker;

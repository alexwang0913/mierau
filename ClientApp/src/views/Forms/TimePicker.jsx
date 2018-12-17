import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import TimePicker from 'react-time-picker';

class FormTimePicker extends React.Component{
    constructor (props) {
    super(props)
    this.state = {
      time: '10:00:30',
      time1: '10:00:30',
      time2: '10:00:30',
      time3: '10:00:30',
      time4: '10:00:30',
      time5: '10:00:30',
      time6: '10:00:30'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
  }

  handleChange(time) {    this.setState({      time: time    });  }
  handleChange1(time) {    this.setState({      time1: time    });  }
  handleChange2(time) {    this.setState({      time2: time    });  }
  handleChange3(time) {    this.setState({      time3: time    });  }
  handleChange4(time) {    this.setState({      time4: time    });  }
  handleChange5(time) {    this.setState({      time5: time    });  }
  handleChange6(time) {    this.setState({      time6: time    });  }
   
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Time Picker</h1>
                        </div>
                    </div>


                            




                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Time Picker</h2>
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
                                            <TimePicker
                                            maxDetail='second'
                                                  onChange={this.handleChange}
                                                  value={this.state.time}
                                                />

                                            </div>
                                        </div>


                                        <div class="form-group">
                                            <label class="form-label" for="field-1">Hour and Minutes</label>
                                            <div class="controls">
                                            <TimePicker
                                            maxDetail='minute'
                                                  onChange={this.handleChange1}
                                                  value={this.state.time1}
                                                />
                                                
                                            </div>
                                        </div>


                                        <div class="form-group">
                                            <label class="form-label" for="field-1">Hours</label>
                                            <div class="controls">
                                            <TimePicker
                                            maxDetail='hour'
                                                  onChange={this.handleChange2}
                                                  value={this.state.time2}
                                                />
                                                
                                            </div>
                                        </div>


                                        <div class="form-group">
                                            <label class="form-label" for="field-1">Disabled</label>
                                            <div class="controls">
                                            <TimePicker
                                            disabled='true'
                                                  onChange={this.handleChange4}
                                                  value={this.state.time4}
                                                />

                                            </div>
                                        </div>


                                        <div class="form-group">
                                            <label class="form-label" for="field-1">Maximum Time</label>
                                            <div class="controls">
                                            <TimePicker
                                            maxTime='22:15:00'
                                                  onChange={this.handleChange5}
                                                  value={this.state.time5}
                                                />

                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="form-label" for="field-1">Minimum Time</label>
                                            <div class="controls">
                                            <TimePicker
                                            minTime='22:45:00'
                                                  onChange={this.handleChange6}
                                                  value={this.state.time6}
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

export default FormTimePicker;

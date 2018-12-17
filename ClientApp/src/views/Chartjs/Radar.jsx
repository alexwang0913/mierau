import React from 'react';
import {
    Row, Col,
} from 'reactstrap';
// react plugin used to create charts
import { Radar } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    
} from 'components';

class Chartjsradar extends React.Component{
    render(){

const data = {
  labels: ['Firefox',
    'Chrome',
    'Edge',
    'IE',
    'Safari','Opera','Others'],
  datasets: [
    {
      label: '2017',
      backgroundColor: 'rgba(233, 30, 99,0.2)',
      borderColor: 'rgba(233, 30, 99,1)',
      pointBackgroundColor: 'rgba(233, 30, 99,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(233, 30, 99,1)',
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: '2018',
      backgroundColor: 'rgba(63, 81, 181,0.2)',
      borderColor: 'rgba(63, 81, 181,1)',
      pointBackgroundColor: 'rgba(63, 81, 181,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(63, 81, 181,1)',
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
};


        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Radar Chart</h1>
                        </div>
                    </div>



                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Browers by Year</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-12">
                            
                            
                                    <div className="chart-area">
                                        <Radar data={data} />
                                    </div>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>


                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default Chartjsradar;

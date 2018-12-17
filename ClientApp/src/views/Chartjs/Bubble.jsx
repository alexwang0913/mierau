import React from 'react';
import {
    Row, Col,
} from 'reactstrap';
// react plugin used to create charts
import { Bubble } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    
} from 'components';

class Chartjsbubble extends React.Component{
    render(){

const data = {
  labels: ['January'],
  datasets: [
    {
      label: 'New Visitors / Users / Registered',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(63, 81, 181,0.4)',
      borderColor: 'rgba(63, 81, 181,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(63, 81, 181,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: 'rgba(63, 81, 181,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 8,
      pointRadius: 10,
      pointHitRadius: 15,
      data: [{x:10,y:15,r:5},{x:8,y:10,r:4},{x:6,y:8,r:7}]
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
                            <h1 class="title">Bubble Chart</h1>
                        </div>
                    </div>


                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Visitor Stats</h2>
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
                                        <Bubble data={data} />
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

export default Chartjsbubble;

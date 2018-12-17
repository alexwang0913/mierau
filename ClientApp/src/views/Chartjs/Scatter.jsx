import React from 'react';
import {
    Row, Col,
} from 'reactstrap';
// react plugin used to create charts
import { Scatter } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    
} from 'components';

class Chartjsscatter extends React.Component{
    render(){

const data = {
  labels: ['Scatter'],
  datasets: [
    {
      label: 'Users New / Visitors',
      fill: false,
      backgroundColor: 'rgba(63, 81, 181,0.4)',
      pointBorderColor: 'rgba(63, 81, 181,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 15,
      pointHoverBackgroundColor: 'rgba(63, 81, 181,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 5,
      pointRadius: 20,
      pointHitRadius: 20,
      data: [
        { x: 65, y: 75 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 18 },
      ]
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
                            <h1 class="title">Scatter Chart</h1>
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
                                        <Scatter data={data} />
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

export default Chartjsscatter;

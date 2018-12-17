import React from 'react';
import {
    Row, Col,
} from 'reactstrap';
// react plugin used to create charts
import { Doughnut } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    
} from 'components';

class Chartjsdoughnut extends React.Component{
    render(){

const data = {
  labels: [
    'Firefox',
    'Chrome',
    'Edge'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
    '#3F51B5','#303F9F','#1A237E','#9FA8DA','#7986CB','#C5CAE9'
    ],
    hoverBackgroundColor: [
    '#3F51B5','#303F9F','#1A237E','#9FA8DA','#7986CB','#C5CAE9'
    ]
  }]
};
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Doughnut Chart</h1>
                        </div>
                    </div>



                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Browers Used</h2>
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
                                        <Doughnut data={data} />
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

export default Chartjsdoughnut;

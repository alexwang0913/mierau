import React from 'react';
import {
    Row, Col,
} from 'reactstrap';
// react plugin used to create charts
import { HorizontalBar } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {
    
} from 'components';

class Chartjshorizontalbar extends React.Component{
    render(){


const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Users',
      backgroundColor: 'rgba(233, 30, 99,1)',
      borderColor: 'rgba(233, 30, 99,0.7)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(233, 30, 99,0.7)',
      hoverBorderColor: 'rgba(233, 30, 99,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
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
                            <h1 class="title">Horizontal Bar Graph</h1>
                        </div>
                    </div>


                            
                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Monthly Users</h2>
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
                                        <HorizontalBar data={data} />
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

export default Chartjshorizontalbar;

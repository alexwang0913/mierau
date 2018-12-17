import React from 'react';
import {
   Row, Col
} from 'reactstrap';
// react plugin used to create charts
import { Line } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers

import {} from 'components';

import {
    dashboardShippedProductsChart,
    dashboardAllProductsChart,
} from 'variables/charts.jsx';

class Chartjsline extends React.Component{

    render(){
      const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Visits',
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
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(63, 81, 181,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
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
                            <h1 class="title">Line Chart</h1>
                        </div>
                    </div>


                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Monthly Stats</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-12">
                            


                                    <div className="chart-area" style={{height: 100+'%'}}>
                                        <Line data={data} />
                                    </div>
                      


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>



                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Users Stats</h2>
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
                                        <Line data={dashboardShippedProductsChart.data} options={dashboardShippedProductsChart.options} />
                                    </div>
                           

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>



                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Day Time Stats</h2>
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
                                        <Line data={dashboardAllProductsChart.data} options={dashboardAllProductsChart.options} />
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

export default Chartjsline;

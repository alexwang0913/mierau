import React from 'react';
import {
    Row, Col
} from 'reactstrap';

import {  } from 'components';
//import styles from 'jvectormap/jquery-jvectormap.css'
import { VectorMap } from 'react-jvectormap';

class Widgetsmisc extends React.Component{
    render(){
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Misc. Widgets</h1>
                        </div>
                    </div>





                    <div class="col-12">
                        <section class="box nobox ">
                            <div class="content-body">    <div class="row">
                                    <div class="col-12 col-lg-9">

                                        <div class="wid-weather">
                                            <div class="row margin-0">
                                                <div class="today col-lg-8 col-md-8 col-12 bg-primary">
                                                    <div class="location float-left">
                                                        <h3>California, USA</h3>
                                                        <span>Today, 12<sup>th</sup> March 2015</span>
                                                    </div>
                                                    <div class="degree float-right">
                                                        <i class='fa fa-cloud icon-lg text-white'></i><span>Now</span><h3>24°</h3>
                                                        <div class="clearfix"></div>
                                                        <h4 class="text-white text-center">Hot & Sunny</h4>
                                                        <span class='windspeed'><i class='fa fa-cloud icon-xs'></i> &nbsp; <strong>57</strong> <sup>MPH</sup></span>
                                                    </div>
                                                    <div class="clearfix"></div>
                                                    <div class="timings">
                                                        <ul class="list-inline list-unstyled">
                                                            <li><span class='time'>13:00</span><i class='fa fa-cloud icon-sm'></i><h4 class='temp'>21°</h4></li>
                                                            <li><span class='time'>15:00</span><i class='fa fa-cloud icon-sm'></i><h4 class='temp'>22°</h4></li>
                                                            <li><span class='time'>17:00</span><i class='fa fa-cloud icon-sm'></i><h4 class='temp'>22°</h4></li>
                                                            <li><span class='time'>19:00</span><i class='fa fa-cloud icon-sm'></i><h4 class='temp'>20°</h4></li>
                                                            <li class="hidden-md"><span class='time'>21:00</span><i class='fa fa-cloud icon-sm'></i><h4 class='temp'>18°</h4></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="weekdays col-lg-4 col-md-4 col-12 bg-white">
                                                    <ul class="list-unstyled">
                                                        <li><span class='day'>Sunday</span><i class='fa fa-cloud icon-xs'></i><span class='temp'>23° - 27°</span></li>
                                                        <li><span class='day'>Monday</span><i class='fa fa-cloud icon-xs'></i><span class='temp'>21° - 26°</span></li>
                                                        <li><span class='day'>Tuesday</span><i class='fa fa-cloud icon-xs'></i><span class='temp'>24° - 28°</span></li>
                                                        <li><span class='day'>Wednesday</span><i class='fa fa-cloud icon-xs'></i><span class='temp'>25° - 26°</span></li>
                                                        <li><span class='day'>Thursday</span><i class='fa fa-cloud icon-xs'></i><span class='temp'>22° - 25°</span></li>
                                                        <li><span class='day'>Friday</span><i class='fa fa-cloud icon-xs'></i><span class='temp'>21° - 28°</span></li>
                                                        <li><span class='day'>Satday</span><i class='fa fa-cloud icon-xs'></i><span class='temp'>23° - 29°</span></li>
                                                    </ul>
                                                </div></div>

                                        </div>

                                    </div>
                                    <div class="col-lg-3 col-md-6 col-12">
                                        <div class="r3_weather">
                                            <div class="wid-weather wid-weather-small">
                                                <div class="">

                                                    <div class="location">
                                                        <h3>California, USA</h3>
                                                        <span>Today, 12<sup>th</sup> March 2015</span>
                                                    </div>
                                                    <div class="clearfix"></div>
                                                    <div class="degree">
                                                        <i class='fa fa-cloud icon-lg text-white'></i><span>Now</span><h3>24°</h3>
                                                        <div class="clearfix"></div>
                                                        <h4 class="text-white text-center">Hot & Sunny</h4>
                                                    </div>
                                                    <div class="clearfix"></div>
                                                    <div class="weekdays bg-white">
                                                        <ul class="list-unstyled">
                                                            <li><span class='day'>Sunday</span><i class='fa fa-cloud icon-xs'></i><span class='temp'>23° - 27°</span></li>
                                                            <li><span class='day'>Monday</span><i class='fa fa-cloud icon-xs'></i><span class='temp'>21° - 26°</span></li>
                                                            <li><span class='day'>Tuesday</span><i class='fa fa-cloud icon-xs'></i><span class='temp'>24° - 28°</span></li>
                                                            <li><span class='day'>Wednesday</span><i class='fa fa-cloud icon-xs'></i><span class='temp'>25° - 26°</span></li>
                                                            <li><span class='day'>Thursday</span><i class='fa fa-cloud icon-xs'></i><span class='temp'>22° - 25°</span></li>
                                                            <li><span class='day'>Friday</span><i class='fa fa-cloud icon-xs'></i><span class='temp'>21° - 28°</span></li>
                                                            <li><span class='day'>Satday</span><i class='fa fa-cloud icon-xs'></i><span class='temp'>23° - 29°</span></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section></div>

                    <div class="clearfix"></div>


                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Visitor's Statistics</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">    <div class="row">
                                    <div class="col-12">
                                        <div class="wid-vectormap">
                                            <div class="row">
                                                <div class="col-12 col-md-9">
                                    <div style={{width: 100+'%', height: 300}}>
                                        <VectorMap map={'world_mill'}
                                                   backgroundColor="#ffffff"
                                                   ref="map"
                                                   containerStyle={{
                                                       width: '100%',
                                                       height: '100%',
                                                   }}
                                                   containerClassName="map"
                                        />
                                    </div>

                                                </div>
                                                <div class="map_progress col-12 col-md-3">
                                                    <h4>Unique Visitors</h4>
                                                    <span class='text-muted'><small>Last Week Rise by 62%</small></span>
                                                    <div class="progress"><div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" style={{width: 62+'%'}}></div></div>
                                                    <br/>
                                                    <h4>Registrations</h4>
                                                    <span class='text-muted'><small>Up by 57% last 7 days</small></span>
                                                    <div class="progress"><div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{width: 57+'%'}}></div></div>
                                                    <br/>
                                                    <h4>Direct Sales</h4>
                                                    <span class='text-muted'><small>Last Month Rise by 22%</small></span>
                                                    <div class="progress"><div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="22" aria-valuemin="0" aria-valuemax="100" style={{width: 22+'%'}}></div></div>
                                                </div>
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

export default Widgetsmisc;

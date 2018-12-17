import React from 'react';
import {
    Row, Col
} from 'reactstrap';

import {  } from 'components';
import CountTo from 'react-count-to';

import PerfectScrollbar from 'perfect-scrollbar';
var ps;

class Widgetssocialmedia extends React.Component{
    componentDidMount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.notificationlist,{suppressScrollX: true, suppressScrollY: false});
        }
    }
    componentWillUnmount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
        }
    }
    render(){ 
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Social Media Widgets</h1>
                        </div>
                    </div>


                    <div class="row margin-0">
                        <div class="col-xl-6">
                            <section class="box nobox ">
                                <div class="content-body">    <div class="row">
                                        <div class="col-12">
                                            <div class="wid-notification">
                                                <h4>Notifications</h4>

                                                <ul class="list-unstyled notification-widget" ref="notificationlist">


                                                    <li class="unread status-available">
                                                        <a href="#!">
                                                            <div class="user-img">
                                                                <img src="images/profile/avatar-1.png" alt="user" class="rounded-circle img-inline" />
                                                            </div>
                                                            <div>
                                                                <span class="name">
                                                                    <strong>Clarine Vassar</strong>
                                                                    <span class="time small">- 15 mins ago</span>
                                                                    <span class="profile-status available float-right"></span>
                                                                </span>
                                                                <span class="desc small">
                                                                    Sometimes it takes a lifetime to win a battle.
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li>


                                                    <li class=" status-away">
                                                        <a href="#!">
                                                            <div class="user-img">
                                                                <img src="images/profile/avatar-2.png" alt="user" class="rounded-circle img-inline"/>
                                                            </div>
                                                            <div>
                                                                <span class="name">
                                                                    <strong>Brooks Latshaw</strong>
                                                                    <span class="time small">- 45 mins ago</span>
                                                                    <span class="profile-status away float-right"></span>
                                                                </span>
                                                                <span class="desc small">
                                                                    Sometimes it takes a lifetime to win a battle.
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li>


                                                    <li class=" status-busy">
                                                        <a href="#!">
                                                            <div class="user-img">
                                                                <img src="images/profile/avatar-3.png" alt="user" class="rounded-circle img-inline"/>
                                                            </div>
                                                            <div>
                                                                <span class="name">
                                                                    <strong>Clementina Brodeur</strong>
                                                                    <span class="time small">- 1 hour ago</span>
                                                                    <span class="profile-status busy float-right"></span>
                                                                </span>
                                                                <span class="desc small">
                                                                    Sometimes it takes a lifetime to win a battle.
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li>


                                                    <li class=" status-offline">
                                                        <a href="#!">
                                                            <div class="user-img">
                                                                <img src="images/profile/avatar-4.png" alt="user" class="rounded-circle img-inline"/>
                                                            </div>
                                                            <div>
                                                                <span class="name">
                                                                    <strong>Carri Busey</strong>
                                                                    <span class="time small">- 5 hours ago</span>
                                                                    <span class="profile-status offline float-right"></span>
                                                                </span>
                                                                <span class="desc small">
                                                                    Sometimes it takes a lifetime to win a battle.
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li>


                                                    <li class=" status-offline">
                                                        <a href="#!">
                                                            <div class="user-img">
                                                                <img src="images/profile/avatar-5.png" alt="user" class="rounded-circle img-inline"/>
                                                            </div>
                                                            <div>
                                                                <span class="name">
                                                                    <strong>Melissa Dock</strong>
                                                                    <span class="time small">- Yesterday</span>
                                                                    <span class="profile-status offline float-right"></span>
                                                                </span>
                                                                <span class="desc small">
                                                                    Sometimes it takes a lifetime to win a battle.
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li>


                                                    <li class=" status-available">
                                                        <a href="#!">
                                                            <div class="user-img">
                                                                <img src="images/profile/avatar-1.png" alt="user" class="rounded-circle img-inline"/>
                                                            </div>
                                                            <div>
                                                                <span class="name">
                                                                    <strong>Verdell Rea</strong>
                                                                    <span class="time small">- 14th Mar</span>
                                                                    <span class="profile-status available float-right"></span>
                                                                </span>
                                                                <span class="desc small">
                                                                    Sometimes it takes a lifetime to win a battle.
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li>


                                                    <li class=" status-busy">
                                                        <a href="#!">
                                                            <div class="user-img">
                                                                <img src="images/profile/avatar-2.png" alt="user" class="rounded-circle img-inline"/>
                                                            </div>
                                                            <div>
                                                                <span class="name">
                                                                    <strong>Linette Lheureux</strong>
                                                                    <span class="time small">- 16th Mar</span>
                                                                    <span class="profile-status busy float-right"></span>
                                                                </span>
                                                                <span class="desc small">
                                                                    Sometimes it takes a lifetime to win a battle.
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li>


                                                    <li class=" status-away">
                                                        <a href="#!">
                                                            <div class="user-img">
                                                                <img src="images/profile/avatar-3.png" alt="user" class="rounded-circle img-inline"/>
                                                            </div>
                                                            <div>
                                                                <span class="name">
                                                                    <strong>Araceli Boatright</strong>
                                                                    <span class="time small">- 16th Mar</span>
                                                                    <span class="profile-status away float-right"></span>
                                                                </span>
                                                                <span class="desc small">
                                                                    Sometimes it takes a lifetime to win a battle.
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li>


                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </section></div>


                        <div class="col-xl-6">
                            <section class="box nobox ">
                                <div class="content-body">    <div class="row">
                                        <div class="col-12">

                                            <div class="wid-blog">

                                                <div class="bg-primary wid-blog-title">
                                                    <h2>This is a beautiful theme with tons of features</h2>
                                                    <span class='actions'><i class='fa fa-times'></i></span>
                                                </div>

                                                <div class="bg-white wid-blog-content row">

                                                    <div class="pic-wrapper col-3 col-md-2 text-center float-left">
                                                        <img src="images/profile/avatar-5.png" class="" alt=""/>
                                                    </div>
                                                    <div class="info-wrapper col-9 col-md-10 float-left">                 
                                                        <div class="username">
                                                            <h4 class="">John Smith</h4>
                                                        </div>
                                                        <div class="info text-muted">
                                                            "Balance" is a concept based on human perception and the complex nature of the human senses of weight and proportion.
                                                        </div>  
                                                        <div class="info-details">
                                                            <ul class="list-unstyled list-inline">
                                                                <li class="list-inline-item"><a href="#!" class="text-muted">12<sup>th</sup> March, 2015</a></li>
                                                                <li class="list-inline-item"><a href="#!" class="text-muted"><i class="fa fa-comment"></i> 584</a></li>
                                                                <li class="list-inline-item"><a href="#!" class="text-accent"><i class="fa fa-heart"></i> 12k</a></li>
                                                                <li class="list-inline-item"><a href="#!" class="text-muted">More</a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </section></div>

                        <div class='clearfix'></div>

                        <div class="col-12 col-lg-4 col-xl-3">
                            <section class="box nobox ">
                                <div class="content-body">    <div class="row">
                                        <div class="col-12">
                                            <div class="wid-uprofile bg-warning">

                                                <div class="uprofile-image">
                                                    <img alt="" src="images/profile/user.png" class="img-fluid"/>
                                                </div>
                                                <div class="uprofile-name">
                                                    <h3>
                                                        <a href="#!">Shane Taylor</a>
                                                        <span class="uprofile-status online"></span>
                                                    </h3>
                                                    <p class="uprofile-title">Web Developer</p>
                                                </div>
                                                <div class="uprofile-info">
                                                    <ul class="list-unstyled">
                                                        <li><i class='fa fa-home'></i> New York, USA</li>
                                                        <li><i class='fa fa-user'></i> 340 Contacts</li>
                                                        <li><i class='fa fa-suitcase'></i> Tech Lead, YIAM</li>
                                                    </ul>
                                                </div>
                                                <div class=" uprofile-social">

                                                    <a href="#!" class="btn btn-primary btn-sm facebook"><i class="fa fa-facebook icon-xs"></i></a>
                                                    <a href="#!" class="btn btn-primary btn-sm twitter"><i class="fa fa-twitter icon-xs"></i></a>
                                                    <a href="#!" class="btn btn-primary btn-sm google-plus"><i class="fa fa-google-plus icon-xs"></i></a>
                                                    <a href="#!" class="btn btn-primary btn-sm dribbble"><i class="fa fa-dribbble icon-xs"></i></a>

                                                </div> 






                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section></div>


                        <div class="col-xl-9">
                            <section class="box ">
                                <header class="panel_header">
                                    <h2 class="title float-left">Social Media Widgets</h2>
                                    <div class="actions panel_actions float-right">
                                        <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                    </div>
                                </header>
                                <div class="content-body">    <div class="row">

                                        <div class="col-12 col-md-6 col-xl-4">

                                            <div class="wid-social facebook">
                                                <div class="social-icon">
                                                    <i class='fa fa-facebook text-light icon-xlg float-right' ></i>
                                                </div>
                                                <div class="social-info">
                                                    <h3><CountTo speed={3000} from={0} to={143}/></h3>
                                                    <h3 class="bold count text-light"> K</h3>                     <h4 class="counttype text-light">Likes</h4>
                                                    <span class="percent">5% increase from last week</span>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="col-12 col-md-6 col-xl-4">

                                            <div class="wid-social twitter">
                                                <div class="social-icon">
                                                    <i class='fa fa-twitter text-light icon-xlg float-right' ></i>
                                                </div>
                                                <div class="social-info">
                                                    <h3><CountTo speed={3000} from={0} to={3454}/></h3>
                                                    <h4 class="counttype text-light">Tweets</h4>
                                                    <span class="percent">2% increase from last week</span>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="col-12 col-md-6 col-xl-4">

                                            <div class="wid-social google-plus">
                                                <div class="social-icon">
                                                    <i class='fa fa-google-plus text-light icon-xlg float-right' ></i>
                                                </div>
                                                <div class="social-info">
                                                    <h3><CountTo speed={3000} from={0} to={523}/></h3>
                                                    <h4 class="counttype text-light">Circles</h4>
                                                    <span class="percent">2% increase from last week</span>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="col-12 col-md-6 col-xl-4">

                                            <div class="wid-social dribbble">
                                                <div class="social-icon">
                                                    <i class='fa fa-dribbble text-light icon-xlg float-right' ></i>
                                                </div>
                                                <div class="social-info">
                                                    <h3><CountTo speed={3000} from={0} to={2525}/></h3>
                                                    <h4 class="counttype text-light">Subscribers</h4>
                                                    <span class="percent">7% increase from last week</span>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="col-12 col-md-6 col-xl-4">

                                            <div class="wid-social linkedin">
                                                <div class="social-icon">
                                                    <i class='fa fa-linkedin text-light icon-xlg float-right' style={{fontSize:66+'px'}}></i>
                                                </div>
                                                <div class="social-info">
                                                    <h3><CountTo speed={3000} from={0} to={2525}/></h3>
                                                    <h4 class="counttype text-light">Connections</h4>
                                                    <span class="percent">7% increase from last week</span>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="col-12 col-md-6 col-xl-4">

                                            <div class="wid-social youtube">
                                                <div class="social-icon">
                                                    <i class='fa fa-youtube text-light icon-xlg float-right' ></i>
                                                </div>
                                                <div class="social-info">
                                                    <h3><CountTo speed={3000} from={0} to={1523}/></h3>
                                                    <h4 class="counttype text-light">Subscribers</h4>
                                                    <span class="percent">7% increase from last week</span>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="col-12 col-md-6 col-xl-4">

                                            <div class="wid-social skype">
                                                <div class="social-icon">
                                                    <i class='fa fa-skype text-light icon-xlg float-right' ></i>
                                                </div>
                                                <div class="social-info">
                                                    <h3><CountTo speed={3000} from={0} to={2721}/></h3>
                                                    <h4 class="counttype text-light">Contacts</h4>
                                                    <span class="percent">7% increase from last week</span>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="col-12 col-md-6 col-xl-4">

                                            <div class="wid-social flickr">
                                                <div class="social-icon">
                                                    <i class='fa fa-flickr text-light icon-xlg float-right' ></i>
                                                </div>
                                                <div class="social-info">
                                                    <h3><CountTo speed={3000} from={0} to={1221}/></h3>
                                                    <h4 class="counttype text-light">Media</h4>
                                                    <span class="percent">7% increase from last week</span>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </section></div>
                    </div>


                                    
                        </Col>
                    </Row>
                </div>
            </div>


        );
    }
}

export default Widgetssocialmedia;

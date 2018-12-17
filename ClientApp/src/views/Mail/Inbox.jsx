import React from 'react';
import { NavLink } from 'react-router-dom';
import {
   Row, Col, UncontrolledDropdown , DropdownToggle , DropdownItem, DropdownMenu
} from 'reactstrap';

import {  } from 'components';
import Mailmenu from 'views/Mail/Menu.jsx';

class Mailinbox extends React.Component{
    render(){
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Inbox</h1>
                        </div>
                    </div>                            
                                        
                            <div class="content-body">    
                                <div class="row">

                                    <Mailmenu/>

                                    <div class="col-lg-9 col-md-8 col-12">
                                        <div class="mail_content">

                                            <div class="row">
                                                <div class="col-12">

                                                    <h3 class="mail_head">Inbox <sup>(5)</sup></h3>
                                                    <i class='fa fa-refresh icon-primary icon-xs icon-accent mail_head_icon'></i>
                                                    <i class='fa fa-search icon-primary icon-xs icon-accent mail_head_icon'></i>
                                                    <i class='fa fa-cog icon-primary icon-xs icon-accent mail_head_icon float-right'></i>


                                                </div>

                                                <div class="col-12">

                                                    <div class="float-left mail_more_btn">
                                                    <UncontrolledDropdown>
                                                      <DropdownToggle caret>
                                                        All
                                                      </DropdownToggle>
                                                      <DropdownMenu>
                                                        <DropdownItem>All</DropdownItem>
                                                        <DropdownItem>Read</DropdownItem>
                                                        <DropdownItem>Unread</DropdownItem>
                                                        <DropdownItem>Starred</DropdownItem>
                                                      </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                        
                                                    </div>

                                                    <div class="float-right mail_nav">
                                                        <button class="btn btn-default btn-icon" rel="tooltip" data-color-class="primary" data-animate=" animated fadeIn" data-toggle="tooltip" data-original-title="Previous" data-placement="top">
                                                            <i class="fa fa-long-arrow-left icon-xs"></i>
                                                        </button>
                                                        <button class="btn btn-default btn-icon" rel="tooltip" data-color-class="primary" data-animate=" animated fadeIn" data-toggle="tooltip" data-original-title="Next" data-placement="top">
                                                            <i class="fa fa-long-arrow-right icon-xs"></i>
                                                        </button>
                                                    </div>
                                                    <span class='float-right mail_count_nav text-muted'><strong>1</strong> to <strong>20</strong> of 3247</span>

                                                </div>

                                                <div class="mail_list col-12">
                                                    <table class="table table-striped table-hover">
                                                        <tr class="unread" id="mail_msg_1">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star-o icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">John Smith</td>
                                                            <td class="open-view"><span class="badge badge-primary">Family</span>&nbsp;<span class="msgtext"><NavLink to='/mail-view'>Hello, hope you having a great day ahead.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>19:34</NavLink></span></td>
                                                        </tr>
                                                        <tr class="unread" id="mail_msg_2">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star-o icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">Laura Willson</td>
                                                            <td class="open-view"><span class="msgtext"><NavLink to='/mail-view'>Your product seems amazingly smart and elegant to use.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>21:54</NavLink></span></td>
                                                        </tr>
                                                        <tr class="unread" id="mail_msg_3">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">Jane D.</td>
                                                            <td class="open-view"><span class="msgtext"><NavLink to='/mail-view'>We play, dance and love. Share love all around you.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>22:28</NavLink></span></td>
                                                        </tr>
                                                        <tr id="mail_msg_4">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star-o icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">John Smith</td>
                                                            <td class="open-view"><span class="msgtext"><NavLink to='/mail-view'>Hello, hope you having a great day ahead.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>Yesterday</NavLink></span></td>
                                                        </tr>
                                                        <tr id="mail_msg_5">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">Laura Willson</td>
                                                            <td class="open-view"><span class="msgtext"><NavLink to='/mail-view'>Your product seems amazingly smart and elegant to use.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>Yesterday</NavLink></span></td>
                                                        </tr>
                                                        <tr id="mail_msg_6">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star-o icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">Jane D.</td>
                                                            <td class="open-view"><span class="badge badge-info">Work</span>&nbsp;<span class="msgtext"><NavLink to='/mail-view'>We play, dance and love. Share love all around you.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>28 Feb</NavLink></span></td>
                                                        </tr>
                                                        <tr class="unread">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">John Smith</td>
                                                            <td class="open-view"><span class="badge badge-info">Work</span>&nbsp;<span class="msgtext"><NavLink to='/mail-view'>Hello, hope you having a great day ahead.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>25 Feb</NavLink></span></td>
                                                        </tr>
                                                        <tr id="mail_msg_8">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">Laura Willson</td>
                                                            <td class="open-view"><span class="msgtext"><NavLink to='/mail-view'>Your product seems amazingly smart and elegant to use.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>25 Feb</NavLink></span></td>
                                                        </tr>
                                                        <tr id="mail_msg_9">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star-o icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">Jane D.</td>
                                                            <td class="open-view"><span class="msgtext"><NavLink to='/mail-view'>We play, dance and love. Share love all around you.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>25 Feb</NavLink></span></td>
                                                        </tr>
                                                        <tr id="mail_msg_10">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star-o icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">John Smith</td>
                                                            <td class="open-view"><span class="badge badge-success">IMP</span>&nbsp;<span class="msgtext"><NavLink to='/mail-view'>Hello, hope you having a great day ahead.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>25 Feb</NavLink></span></td>
                                                        </tr>
                                                        <tr class="unread">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">Laura Willson</td>
                                                            <td class="open-view"><span class="msgtext"><NavLink to='/mail-view'>Your product seems amazingly smart and elegant to use.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>21 Feb</NavLink></span></td>
                                                        </tr>
                                                        <tr id="mail_msg_12">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">Jane D.</td>
                                                            <td class="open-view"><span class="msgtext"><NavLink to='/mail-view'>We play, dance and love. Share love all around you.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>21 Feb</NavLink></span></td>
                                                        </tr>
                                                        <tr id="mail_msg_13">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star-o icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">John Smith</td>
                                                            <td class="open-view"><span class="badge badge-success">IMP</span>&nbsp;<span class="msgtext"><NavLink to='/mail-view'>Hello, hope you having a great day ahead.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>21 Feb</NavLink></span></td>
                                                        </tr>
                                                        <tr id="mail_msg_14">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star-o icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">Laura Willson</td>
                                                            <td class="open-view"><span class="msgtext"><NavLink to='/mail-view'>Your product seems amazingly smart and elegant to use.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>21 Feb</NavLink></span></td>
                                                        </tr>
                                                        <tr id="mail_msg_15">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">Jane D.</td>
                                                            <td class="open-view"><span class="msgtext"><NavLink to='/mail-view'>We play, dance and love. Share love all around you.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>21 Feb</NavLink></span></td>
                                                        </tr>
                                                        <tr class="unread">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star-o icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">John Smith</td>
                                                            <td class="open-view"><span class="badge badge-info">Work</span>&nbsp;<span class="msgtext"><NavLink to='/mail-view'>Hello, hope you having a great day ahead.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>17 Feb</NavLink></span></td>
                                                        </tr>
                                                        <tr id="mail_msg_17">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">Laura Willson</td>
                                                            <td class="open-view"><span class="msgtext"><NavLink to='/mail-view'>Your product seems amazingly smart and elegant to use.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>17 Feb</NavLink></span></td>
                                                        </tr>
                                                        <tr id="mail_msg_18">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star-o icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">Jane D.</td>
                                                            <td class="open-view"><span class="msgtext"><NavLink to='/mail-view'>We play, dance and love. Share love all around you.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>17 Feb</NavLink></span></td>
                                                        </tr>
                                                        <tr id="mail_msg_19">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star-o icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">John Smith</td>
                                                            <td class="open-view"><span class="badge badge-danger">Urgent</span>&nbsp;<span class="msgtext"><NavLink to='/mail-view'>Hello, hope you having a great day ahead.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>17 Feb</NavLink></span></td>
                                                        </tr>
                                                        <tr id="mail_msg_20">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">Laura Willson</td>
                                                            <td class="open-view"><span class="msgtext"><NavLink to='/mail-view'>Your product seems amazingly smart and elegant to use.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>17 Feb</NavLink></span></td>
                                                        </tr>
                                                        <tr class="unread">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star-o icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">Jane D.</td>
                                                            <td class="open-view"><span class="msgtext"><NavLink to='/mail-view'>We play, dance and love. Share love all around you.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>16 Feb</NavLink></span></td>
                                                        </tr>
                                                        <tr id="mail_msg_22">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star-o icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">John Smith</td>
                                                            <td class="open-view"><span class="badge badge-primary">Family</span>&nbsp;<span class="msgtext"><NavLink to='/mail-view'>Hello, hope you having a great day ahead.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>16 Feb</NavLink></span></td>
                                                        </tr>
                                                        <tr id="mail_msg_23">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">Laura Willson</td>
                                                            <td class="open-view"><span class="msgtext"><NavLink to='/mail-view'>Your product seems amazingly smart and elegant to use.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>16 Feb</NavLink></span></td>
                                                        </tr>
                                                        <tr id="mail_msg_24">
                                                            <td class=""><input class="iCheck" type="checkbox"/></td>
                                                            <td class=""><div class="star"><i class='fa fa-star-o icon-xs icon-accent'></i></div></td>
                                                            <td class="open-view">Jane D.</td>
                                                            <td class="open-view"><span class="msgtext"><NavLink to='/mail-view'>We play, dance and love. Share love all around you.</NavLink></span></td>
                                                            <td class="open-view"><span class="msg_time"><NavLink to='/mail-view'>16 Feb</NavLink></span></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Mailinbox;

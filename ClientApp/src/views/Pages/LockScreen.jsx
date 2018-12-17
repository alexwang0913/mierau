import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class LockScreen extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="">
                    <Row>
                        <Col xs={12} md={12}>


        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12">
                    <section class="box nobox ">
                        <div class="content-body">    <div class="row">
                                <div class="col-12">

                                    <h1 class="lockscreen_icon"><i class='fa fa-lock'></i></h1>
                                    <h1 class="lockscreen_info"><img alt="" src='images/profile/profile.jpg' /> Hello Jason,</h1>
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6 col-8 offset-lg-4 offset-md-3 offset-2 lockscreen_search_area">
                                            <form action="#!" method="post" class="lockscreen_search">
                                                <div class="input-group transparent">
                                                    <span class="input-group-addon">
                                                        <i class="fa fa-unlock icon-primary"></i>
                                                    </span>
                                                    <input type="password" class="form-control" placeholder="Type & Enter" />
                                                    <input type='submit' value="" />
                                                </div>
                                            </form>
                                        </div></div>
                                    <div class="clearfix"></div>
                                    <h1 class="lockscreen_tagline">Please enter your password for access</h1>


                                </div>
                            </div>
                        </div>
                    </section></div>

            </div>
        </div>




                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default LockScreen;

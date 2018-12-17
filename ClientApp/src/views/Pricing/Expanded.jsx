import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class PricingExpanded extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Timeline Centered</h1>
                        </div>
                    </div>


                            
           

                    <div class="col-xl-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Expanded Style</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">    <div class="row">
                                    <div class="col-12">

                                        <div class="pricing-tables">

                                            <div class="row">
                                                <div class="col-md-4">

                                                    <div class="price-pack">

                                                        <div class="head">
                                                            <h3>Beginner</h3>

                                                        </div>  

                                                        <ul class="item-list list-unstyled">
                                                            <li><strong>30GB</strong> Storage</li>
                                                            <li>
                                                                <strong>15</strong> Email Addresses</li>
                                                            <li><strong>5</strong> Domains </li>
                                                            <li><strong>First-Class</strong> Support</li>

                                                        </ul>

                                                        <div class="price">
                                                            <h3><span class="symbol">$</span>29</h3>
                                                            <h4>per month</h4>
                                                        </div>

                                                        <button type="button" class="btn btn-lg btn-default">BUY</button>

                                                    </div>


                                                </div>


                                                <div class="col-md-4 ">
                                                    <div class="price-pack recommended">

                                                        <div class="head">
                                                            <h3>Intermediate</h3>

                                                        </div>  

                                                        <ul class="item-list list-unstyled">
                                                            <li><strong>75GB</strong> Storage</li>
                                                            <li><strong>25</strong> Email Addresses</li>
                                                            <li><strong>15</strong> Domains</li>
                                                            <li></li>
                                                            <li><strong>First-Class</strong> Support</li>

                                                        </ul>

                                                        <div class="price">
                                                            <h3><span class="symbol">$</span>39</h3>
                                                            <h4>per month</h4>
                                                        </div>

                                                        <button type="button" class="btn btn-lg btn-default">BUY</button>

                                                    </div>

                                                </div>


                                                <div class="col-md-4  ">
                                                    <div class="price-pack">

                                                        <div class="head">
                                                            <h3>Advanced</h3>

                                                        </div>  

                                                        <ul class="item-list list-unstyled">
                                                            <li><strong>100GB </strong>Storage</li>
                                                            <li><strong>50 </strong>Email Addresses</li>
                                                            <li><strong>25</strong> Domains</li>
                                                            <li><strong>First-Class</strong> Support</li>

                                                        </ul>

                                                        <div class="price">
                                                            <h3><span class="symbol">$</span>49</h3>
                                                            <h4>per month</h4>
                                                        </div>

                                                        <button type="button" class="btn btn-lg btn-accent">BUY</button>

                                                    </div>

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

export default PricingExpanded;

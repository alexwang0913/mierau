import React from 'react';
import {
     Row, Col
} from 'reactstrap';

import {  } from 'components';

import fontawesome from 'variables/fontawesome';

class FontAwesome extends React.Component{
    render(){
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Font Awesome Icons</h1>
                        </div>
                    </div>




                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Font Awesome</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-12">
                            



                                    <Row>
                                        {
                                            fontawesome.map((prop,key) => {
                                                return (
                                                    <Col lg={2} md={3} sm={4} xs={6} className="font-icon-list" key={key}>
                                                        <div className="ui-faicon">
                                                            <i className={"fa " + prop}></i>
                                                            <p>{prop}</p>
                                                        </div>
                                                    </Col>
                                                );
                                            })
                                        }
                                    </Row>

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

export default FontAwesome;

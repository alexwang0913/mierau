import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UIResponsiveImages extends React.Component{
   
    
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


                            
        

                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Responsive Image Styles</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">    
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-12">



                                        <h5>Responsive Image</h5>
                                        <div class="spacer"></div>
                                        <img src="images/responsive-images/895x250.svg" class="img-fluid" alt="Responsive" />

                                        <br/><div class="spacer"></div>
                                        <h5>Image Thumbnail</h5>
                                        <div class="spacer"></div>

                                        <img src="images/responsive-images/200x200.svg" alt="thumbnail" class="img-thumbnail" />

                                        <br/><div class="spacer"></div>
                                        <h5>Align images</h5>
                                        <div class="spacer"></div>
                                        <img src="images/responsive-images/200x200.svg" alt="thumbnail" class="img-thumbnail rounded float-left" />


                                        <img src="images/responsive-images/200x200.svg" alt="thumbnail" class="img-thumbnail rounded float-right" />
                                        <div class="spacer"></div>
                                        <img src="images/responsive-images/200x200.svg" alt="thumbnail" class="img-thumbnail rounded mx-auto d-block" />

                                        <div class="clearfix"></div>


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

export default UIResponsiveImages;

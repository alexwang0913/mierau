import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UIVideoEmbeds extends React.Component{
   
    
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
                                <h2 class="title float-left">Responsive Embed</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">    <div class="row">
                                    <div class="col-lg-10">

                                        <h5>21:9 aspect ratio</h5>
                                        <div class="embed-responsive embed-responsive-21by9">
                                            <iframe title="video embed" class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
                                        </div>
                                        <div class="spacer"></div><br/>

                                        <h5>16:9 aspect ratio</h5>
                                        <div class="embed-responsive embed-responsive-16by9">
                                            <iframe title="video embed" class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
                                        </div>
                                        <div class="spacer"></div><br/>

                                        <h5>4:3 aspect ratio</h5>
                                        <div class="embed-responsive embed-responsive-4by3">
                                            <iframe title="video embed" class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
                                        </div>
                                        <div class="spacer"></div><br/>

                                        <h5>1:1 aspect ratio</h5>
                                        <div class="embed-responsive embed-responsive-1by1">
                                            <iframe title="video embed" class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
                                        </div>
                                        <div class="spacer"></div><br/>

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

export default UIVideoEmbeds;

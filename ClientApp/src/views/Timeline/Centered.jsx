import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class CenteredTimeline extends React.Component{
   
    
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
                                <h2 class="title float-left">Timeline (Centered Style)</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">    
                                <div class="row">
                                    <div class="col-12">


                                        <ul class="timeline">
                                            <li>
                                                <div class="timeline-badge animated flipInY"><i class="fa fa-check"></i></div>
                                                <div class="timeline-panel animated flipInY">
                                                    <div class="timeline-heading">
                                                        <h4 class="timeline-title">Graphic Design</h4>
                                                        <p><small class="text-muted"><i class="fa fa-clock-o"></i> 11 hours ago via Twitter</small></p>
                                                    </div>
                                                    <div class="timeline-body">
                                                        <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. Graphic design can be used for advertising, or just for entertainment intended for the mind.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="timeline-inverted ">
                                                <div class="timeline-badge warning animated flipInY"><i class="fa fa-paperclip"></i></div>
                                                <div class="timeline-panel animated flipInY">
                                                    <div class="timeline-heading">
                                                        <h4 class="timeline-title">Balance</h4>
                                                        <p><small class="text-muted"><i class="fa fa-clock-o"></i> Feb, 23rd 2014 by CreativeUser</small></p>            
                                                    </div>
                                                    <div class="timeline-body">
                                                        <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. Graphic design can be used for advertising, or just for entertainment intended for the mind.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="timeline-badge danger animated flipInY"><i class="fa fa-archive"></i></div>
                                                <div class="timeline-panel animated flipInY">
                                                    <div class="timeline-heading">
                                                        <h4 class="timeline-title">Contrast</h4>
                                                        <p><small class="text-muted"><i class="fa fa-clock-o"></i> Feb, 23rd 2014 by CreativeUser</small></p>            
                                                    </div>
                                                    <div class="timeline-body">
                                                        <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. Graphic design can be used for advertising, or just for entertainment intended for the mind.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="timeline-badge info animated flipInY"><i class="fa fa-bank"></i></div>
                                                <div class="timeline-panel animated flipInY">
                                                    <div class="timeline-heading">
                                                        <h4 class="timeline-title">Emphasis</h4>
                                                        <p><small class="text-muted"><i class="fa fa-clock-o"></i> Feb, 23rd 2014 by CreativeUser</small></p>            
                                                    </div>
                                                    <div class="timeline-body">
                                                        <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. Graphic design can be used for advertising, or just for entertainment intended for the mind.</p>
                                                        
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="timeline-inverted">
                                                <div class="timeline-badge success animated flipInY"><i class="fa fa-thumbs-up"></i></div>
                                                <div class="timeline-panel animated flipInY">
                                                    <div class="timeline-heading">
                                                        <h4 class="timeline-title">Gestalt</h4>
                                                        <p><small class="text-muted"><i class="fa fa-clock-o"></i> Feb, 23rd 2014 by CreativeUser</small></p>            
                                                    </div>
                                                    <div class="timeline-body">
                                                        <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. Graphic design can be used for advertising, or just for entertainment intended for the mind.</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>



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

export default CenteredTimeline;

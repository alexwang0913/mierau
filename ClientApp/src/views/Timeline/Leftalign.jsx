import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class LeftTimeline extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Timeline Left Aligned</h1>
                        </div>
                    </div>


                            
           


                    <div class="col-xl-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Timeline (Left Style)</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">    <div class="row">
                                    <div class="col-12">



                                        <div class="timeline2-centered">

                                            <article class="timeline2-entry">

                                                <div class="timeline2-entry-inner">

                                                    <div class="timeline2-icon bg-success">
                                                        <i class="fa fa-tint"></i>
                                                    </div>

                                                    <div class="timeline2-label">
                                                        <h2><a href="#!"><strong>Art Ramadani</strong></a> <span>posted a status update</span></h2>
                                                        <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                                                    </div>
                                                </div>

                                            </article>


                                            <article class="timeline2-entry">

                                                <div class="timeline2-entry-inner">

                                                    <div class="timeline2-icon bg-secondary">
                                                        <i class="fa fa-suitcase"></i>
                                                    </div>

                                                    <div class="timeline2-label">
                                                        <h2><a href="#!"><strong>Job Meeting</strong></a></h2>
                                                        <p>You have a meeting at <strong>Laborator Office</strong> Today.</p>
                                                    </div>
                                                </div>

                                            </article>


                                            <article class="timeline2-entry">

                                                <div class="timeline2-entry-inner">

                                                    <div class="timeline2-icon bg-info">
                                                        <i class="fa fa-dashboard"></i>
                                                    </div>

                                                    <div class="timeline2-label">
                                                        <h2><a href="#!"><strong>Arlind Angelo</strong></a> <span>checked in at</span> <a href="#!">Laborator</a></h2>

                                                        <blockquote>Great place, feeling like in home.</blockquote>

                                                    </div>
                                                </div>

                                            </article>


                                            <article class="timeline2-entry">

                                                <div class="timeline2-entry-inner">

                                                    <div class="timeline2-icon bg-warning">
                                                        <i class="fa fa-camera"></i>
                                                    </div>

                                                    <div class="timeline2-label">
                                                        <h2><a href="#!"><strong>Kim Nushi</strong></a> <span>changed his</span> <a href="#!">Profile Picture</a></h2>

                                                        <blockquote>Pianoforte principles our unaffected not for astonished travelling are particular.</blockquote>
                                                    </div>
                                                </div>

                                            </article>


                                            <article class="timeline2-entry begin">

                                                <div class="timeline2-entry-inner">

                                                    <div class="timeline2-icon">
                                                        <i class="fa fa-plus" style={{color: '#cccccc', position: 'relative', top: 3+'px'}}></i>
                                                    </div>

                                                </div>

                                            </article>

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

export default LeftTimeline;

import React from 'react';
import {
    Row, Col
} from 'reactstrap';

import {  } from 'components';
import CountTo from 'react-count-to';

class Widgetscountertiles extends React.Component{
    render(){ 
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Counter Tiles</h1>
                        </div>
                    </div>



                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Counter Tiles</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">    <div class="row">

                                    <div class="col-lg-12"><h4>Default (Colored Tiles)</h4><br/></div>

                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="tile-counter bg-primary">
                                            <div class="wid-content">
                                                <i class='fa fa-thumbs-up icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1001} to={3504}/></h2>
                                                <div class="clearfix"></div>
                                                <span>People liked it !</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="tile-counter bg-purple">
                                            <div class="wid-content">
                                                <i class='fa fa-heart icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1001} to={4504}/></h2>
                                                <div class="clearfix"></div>
                                                <span>Loved your post !</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="tile-counter bg-accent">
                                            <div class="wid-content">
                                                <i class='fa fa-user icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1001} to={3304}/></h2>
                                                <div class="clearfix"></div>
                                                <span>New Users</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="tile-counter bg-warning">
                                            <div class="wid-content">
                                                <i class='fa fa-share icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1001} to={7504}/></h2>
                                                <div class="clearfix"></div>
                                                <span>Shared this post</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="tile-counter bg-info">
                                            <div class="wid-content">
                                                <i class='fa fa-rocket icon-lg'></i>
                                                <h2><CountTo speed={3000} from={11} to={87}/></h2>
                                                <h2><span>MB</span></h2>
                                                <div class="clearfix"></div>
                                                <span>Server Load</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="tile-counter bg-success">
                                            <div class="wid-content">
                                                <i class='fa fa-dashboard icon-lg'></i>
                                                <h2><CountTo speed={3000} from={100} to={1624}/></h2>
                                                <div class="clearfix"></div>
                                                <span>New Sites!</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="tile-counter bg-danger">
                                            <div class="wid-content">
                                                <i class='fa fa-thumbs-down icon-lg'></i>
                                                <h2><CountTo speed={3000} from={0} to={224}/></h2>
                                                <div class="clearfix"></div>
                                                <span>People disliked it</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="tile-counter bg-secondary">
                                            <div class="wid-content">
                                                <i class='fa fa-bookmark icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1001} to={9824}/></h2>
                                                <div class="clearfix"></div>
                                                <span>Pages Bookmarked!</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="clearfix spacer20"></div>


                                    <div class="col-lg-12"><h4>Inverted Style</h4><br/></div>

                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="tile-counter inverted text-primary">
                                            <div class="wid-content">
                                                <i class='fa fa-thumbs-up icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1001} to={3504}/></h2>
                                                <div class="clearfix"></div>
                                                <span>People liked it !</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="tile-counter inverted text-purple">
                                            <div class="wid-content">
                                                <i class='fa fa-heart icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1001} to={4504}/></h2>
                                                <div class="clearfix"></div>
                                                <span>Loved your post !</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="tile-counter inverted text-accent">
                                            <div class="wid-content">
                                                <i class='fa fa-user icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1001} to={3304}/></h2>
                                                <div class="clearfix"></div>
                                                <span>New Users</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="tile-counter inverted text-warning">
                                            <div class="wid-content">
                                                <i class='fa fa-share icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1001} to={7504}/></h2>
                                                <div class="clearfix"></div>
                                                <span>Shared this post</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="tile-counter inverted text-info">
                                            <div class="wid-content">
                                                <i class='fa fa-rocket icon-lg'></i>
                                                <h2><CountTo to={1234} speed={1234} /></h2>
                                                <h2><CountTo speed={3000} from={11} to={87}/></h2>
                                                <h2>MB</h2>                     <div class="clearfix"></div>
                                                <span>Server Load</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="tile-counter inverted text-success">
                                            <div class="wid-content">
                                                <i class='fa fa-dashboard icon-lg'></i>
                                                <h2><CountTo speed={3000} from={100} to={1624} /></h2>
                                                <div class="clearfix"></div>
                                                <span>New Sites!</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="tile-counter inverted text-danger">
                                            <div class="wid-content">
                                                <i class='fa fa-thumbs-down icon-lg'></i>
                                                <h2><CountTo speed={3000} from={0} to={224}/></h2>
                                                <div class="clearfix"></div>
                                                <span>People disliked it</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-12 col-md-6 col-xl-4">
                                        <div class="tile-counter inverted text-secondary">
                                            <div class="wid-content">
                                                <i class='fa fa-bookmark icon-lg'></i>
                                                <h2><CountTo speed={3000} from={1001} to={9824}/></h2>
                                                <div class="clearfix"></div>
                                                <span>Pages Bookmarked!</span>
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

export default Widgetscountertiles;

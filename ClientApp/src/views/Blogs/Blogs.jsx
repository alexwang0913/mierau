import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import { NavLink } from 'react-router-dom';

import {
    
} from 'components';

class Blogs extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Blogs</h1>
                        </div>
                    </div>


                            
    
                    <div class="col-xl-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Blog Posts</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">    <div class="row">
                                    <div class="col-12">


                                        <div class="blog_post">
                                            <h3><NavLink to='/ui-blog-item'>Contrast and Similarity in Graphic Design</NavLink></h3>
                                            <h5>Written by <a href="#!">Me</a> on May 11, 2013.</h5>
                                            <p class="blog_info">
                                                <i class="fa fa-comment"></i> <a href="#comments">3 comments</a>
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <i class="fa fa-tags"></i> <a href="#!">responsive</a> <a href="#!">web</a> <a href="#!">mobile</a>
                                            </p>
                                            <img class="media-object" src="images/blog.png" alt="" />
                                            <p class="blog-content">Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong. <br />Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong.</p>
                                            <a href="ui-blog-item.html" class="btn btn-primary"><span>Read more</span>  &nbsp; <i class="fa fa-angle-double-right"></i></a>
                                        </div>

                                        <div class="blog_post">
                                            <h3><NavLink to='/ui-blog-item'>Contrast and Similarity in Graphic Design</NavLink></h3>
                                            <h5>Written by <a href="#!">Me</a> on May 11, 2013.</h5>
                                            <p class="blog_info">
                                                <i class="fa fa-comment"></i> <a href="#comments">3 comments</a>
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <i class="fa fa-tags"></i> <a href="#!">responsive</a> <a href="#!">web</a> <a href="#!">mobile</a>
                                            </p>
                                            <img class="media-object" src="images/blog.png" alt="" />
                                            <p class="blog-content">Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong. <br />Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong.</p>
                                            <a href="ui-blog-item.html" class="btn btn-primary"><span>Read more</span>  &nbsp; <i class="fa fa-angle-double-right"></i></a>
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

export default Blogs;

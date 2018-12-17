import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import { NavLink } from 'react-router-dom';

import {
    
} from 'components';

class SingleBlog extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Single Blog</h1>
                        </div>
                    </div>


                            
    

                    <div class="col-xl-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Single Blog Post</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">    <div class="row">
                                    <div class="col-12">


                                        <div class="blog_post full_blog_post">
                                            <h3><NavLink to='/ui-blog-item'>Contrast and Similarity in Graphic Design</NavLink></h3>
                                            <h5>Written by <a href="#!">Me</a> on May 11, 2013.</h5>
                                            <p class="blog_info">
                                                <i class="fa fa-comment"></i> <a href="#comments">3 comments</a>
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <i class="fa fa-tags"></i> <a href="#!">responsive</a> <a href="#!">web</a> <a href="#!">mobile</a>
                                            </p>

                                            <div class="blog-content">

                                                <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. Graphic design can be used for advertising, or just for entertainment intended for the mind.</p>

                                                <img alt="" class="media-object" src="images/blog.png" />

                                                <p>Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space). "Balance" is a concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance. A design composition does not have to be symmetrical or linear to be considered balanced, the balance is global to all elements even the absence of content. In this context perfectly symmetrical and linear compositions are not necessarily balanced and so asymmetrical or radial distributions of text and graphic elements can achieve balance in a composition.</p>

                                                <p>Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships. For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways. Another way to describe contrast, is to say "a small object next to a large object will look smaller". As contrast in size diminishes, monotony is approached.</p>

                                                <p>Making a specific element stand out or draw attention to the eye. Emphasis can be achieved in graphic design by placing elements on the page in positions where the eye is naturally drawn, by using other principles such as contrast, repetition, or movement. Bold and italic type provides emphasis for text. Graphic elements gain emphasis through size, visual weight, color, complexity, uniqueness, placement on the page, and other features.</p>

                                            </div>

                                            <div id="comments">

                                                <h3>Comments</h3>

                                                <div class="card comment-block level-1" style={{display:'inline-block'}}>
                                                    <div class="row margin-0">
                                                        <div class="col-lg-1 col-md-2 col-3 img-area">
                                                            <img alt="" src="images/profile/avatar-1.png" />
                                                        </div>
                                                        <div class="col-lg-11 col-md-10 col-9">
                                                            <h5><i class="icon-user"></i>&nbsp;By <a href="#!">Jason</a> on May 12, 2013.</h5>
                                                            <div>
                                                                <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong in labore pig pork biltong.</p>
                                                            </div>
                                                            <a href="#!" class="float-left">Reply &nbsp;<i class="fa fa-angle-double-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="card comment-block level-2" style={{display:'inline-block'}}>
                                                    <div class="row margin-0">
                                                        <div class="col-lg-1 col-md-2 col-3 img-area">
                                                            <img alt="" src="images/profile/avatar-2.png" />
                                                        </div>
                                                        <div class="col-lg-11 col-md-10 col-9">
                                                            <h5><i class="icon-user"></i>&nbsp;By <a href="#!">Jason</a> on May 12, 2013.</h5>
                                                            <div>
                                                                <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong in labore pig pork biltong.</p>
                                                            </div>
                                                            <a href="#!" class="float-left">Reply &nbsp;<i class="fa fa-angle-double-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="card comment-block level-3" style={{display:'inline-block'}}>
                                                    <div class="row margin-0">
                                                        <div class="col-lg-1 col-md-2 col-3 img-area">
                                                            <img alt="" src="images/profile/avatar-3.png" />
                                                        </div>
                                                        <div class="col-lg-11 col-md-10 col-9">
                                                            <h5><i class="icon-user"></i>&nbsp;By <a href="#!">Jason</a> on May 12, 2013.</h5>
                                                            <div>
                                                                <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong in labore pig pork biltong.</p>
                                                            </div>
                                                            <a href="#!" class="float-left">Reply &nbsp;<i class="fa fa-angle-double-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="card comment-block level-1" style={{display:'inline-block'}}>
                                                    <div class="row margin-0">
                                                        <div class="col-lg-1 col-md-2 col-3 img-area">
                                                            <img alt="" src="images/profile/avatar-4.png" />
                                                        </div>
                                                        <div class="col-lg-11 col-md-10 col-9">
                                                            <h5><i class="icon-user"></i>&nbsp;By <a href="#!">Jason</a> on May 12, 2013.</h5>
                                                            <div>
                                                                <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong in labore pig pork biltong.</p>
                                                            </div>
                                                            <a href="#!" class="float-left">Reply &nbsp;<i class="fa fa-angle-double-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>


                                            <div class="clearfix"></div><br/>
                                            <h3>Leave a Comment</h3>
                                            <form class="form row">
                                                <div class="form-group col-9">
                                                    <label class="form-label" for="inputName">Name</label>
                                                    <div class="controls">
                                                        <input type="text" class=" form-control" id="inputName" />
                                                    </div>
                                                </div>
                                                <div class="form-group col-9">
                                                    <label class="form-label" for="inputEmail">Email</label>
                                                    <div class="controls">
                                                        <input type="text" class=" form-control" id="inputEmail" />
                                                    </div>
                                                </div>

                                                <div class="form-group col-9">
                                                    <label class="form-label" for="inputComment">Comment</label>
                                                    <div class="controls">
                                                        <textarea class=" form-control" id="inputComment" rows="6"></textarea>
                                                    </div>
                                                </div>

                                                <div class="form-group col-9">
                                                    <div class="controls action">
                                                        <button type="submit" class="btn btn-primary">Post Comment</button>
                                                    </div>
                                                </div>
                                            </form>

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

export default SingleBlog;

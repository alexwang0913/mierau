import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UITypography extends React.Component{
   
    
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


                            
           


                    <div class="row margin-0">
                        <div class="col-xl-8 col-lg-8 col-md-12 col-12">
                            <section class="box ">
                                <header class="panel_header">
                                    <h2 class="title float-left">Typography</h2>
                                    <div class="actions panel_actions float-right">
                                        <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                    </div>
                                </header>
                                <div class="content-body">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <h3>Headings</h3>
                                            <br/>
                                            <h1>h1. Heading 1 <small>Secondary text</small></h1>
                                            <h2>h2. Heading 2 <small>Secondary text</small></h2>
                                            <h3>h3. Heading 3 <small>Secondary text</small></h3>
                                            <h4>h4. Heading 4 <small>Secondary text</small></h4>
                                            <h5>h5. Heading 5 <small>Secondary text</small></h5>
                                            <h6>h6. Heading 6 <small>Secondary text</small></h6>
                                        </div>
                                        <br/>
                                        <div class="col-lg-12">
                                            <br/>
                                            <h3>Text Styles & Tags</h3>
                                            <br/>
                                            <p class="lead">
                                                In design, space is concerned with the area <del>deep within the moment</del> of designated design.
                                            </p>
                                            <p>
                                                For a two-dimensional design space concerns <ins>creating the illusion</ins> of a third dimension on <em>a flat surface</em>. Overlap is the effect where objects appear to be on top of each other. This illusion makes the top element look closer to the observer. 
                                            </p>
                                            <p>
                                                Shading adds gradation marks <abbr title="HyperText Markup Language" class="initialism">HTML</abbr> to make an object of a two-dimensional <mark>surface seem three-dimensional</mark>. Highlight, Transitional Light, Core of the Shadow, Reflected Light, and Cast Shadow give an object a three-dimensional look.
                                            </p>

                                            <br/>

                                            <h1 class="light">the elements, <span class="semi-bold">bring them together</span></h1>
                                            <h4>Visual unity is a main goal of graphic design</h4>
                                            <br/>
                                            <h2>Perspective, Similarity <span class="semi-bold">& Contrast</span>, <i>Rhythm</i> </h2>
                                            <h4><span class="semi-bold">Semi Bold</span>, Light , <span class="semi-bold">Bold</span> , <i>Italics</i></h4>
                                            <p>A good design contains elements that lead the reader through each element in order of its significance. The type and images should be expressed starting from most important to the least important.</p>
                                            <br/>
                                            <h3><span class="semi-bold">Numerics</span> stuff! - 1234<span class="semi-bold">56</span>78<span class="bold">9</span>0</h3>
                                            <h3>Some more text addons <span class="semi-bold">640.54<sup>USD</sup></span></h3>
                                            <h3>Decimals <span class="semi-bold">3432.<sup><u>10</u></sup></span></h3>

                                        </div>
                                    </div>


                                </div>
                            </section></div>

                        <div class="col-xl-4 col-lg-4 col-md-12 col-12">


                            <div class="col-12 padding-0">
                                <section class="box ">
                                    <header class="panel_header">
                                        <h2 class="title float-left">Unordered Lists</h2>
                                        <div class="actions panel_actions float-right">
                                            <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                        </div>
                                    </header>
                                    <div class="content-body">    <div class="row">
                                            <div class="col-lg-12 col-md-12 col-12">

                                                <ul>
                                                    <li>
                                                        Lorem ipsum dolor sit amet
                                                    </li>
                                                    <li>
                                                        Faucibus porta lacus fringilla vel
                                                    </li>
                                                    <li>
                                                        Facilisis in pretium nisl aliquet
                                                    </li>
                                                    <li>
                                                        Nulla volutpat aliquam velit
                                                        <ul>
                                                            <li>
                                                                Phasellus iaculis neque
                                                            </li>
                                                            <li>
                                                                Purus sodales ultricies
                                                            </li>
                                                            <li>
                                                                Ac tristique libero volutpat at
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Faucibus porta lacus fringilla vel
                                                    </li>
                                                    <li>
                                                        Aenean sit amet erat nunc
                                                    </li>
                                                    <li>
                                                        Faucibus porta lacus fringilla vel
                                                    </li>
                                                    <li>
                                                        Eget porttitor lorem ipsum nunc erat sit
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </section></div>


                            <div class="col-12 padding-0">
                                <section class="box ">
                                    <header class="panel_header">
                                        <h2 class="title float-left">Ordered Lists</h2>
                                        <div class="actions panel_actions float-right">
                                            <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                        </div>
                                    </header>
                                    <div class="content-body">    <div class="row">
                                            <div class="col-lg-12 col-md-12 col-12">

                                                <ol>
                                                    <li><span >Lorem ipsum dolor sit amet</span></li>
                                                    <li><span >Consectetur adipiscing elit</span></li>
                                                    <li><span >Integer molestie lorem at massa</span></li>
                                                    <li><span >Facilisis in pretium nisl aliquet</span></li>
                                                    <li><span >Nulla volutpat aliquam velit</span></li>
                                                    <li><span >Faucibus porta lacus fringilla vel</span></li>
                                                    <li><span >Aenean sit amet erat nunc</span></li>
                                                    <li><span >Eget porttitor lorem</span></li>
                                                    <li><span >Nulla volutpat aliquam velit</span></li>
                                                    <li><span >Faucibus porta lacus fringilla vel</span></li>
                                                </ol>

                                            </div>
                                        </div>
                                    </div>
                                </section></div>



                            <div class="col-12 padding-0">
                                <section class="box ">
                                    <header class="panel_header">
                                        <h2 class="title float-left">Inline Lists</h2>
                                        <div class="actions panel_actions float-right">
                                            <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                        </div>
                                    </header>
                                    <div class="content-body">    <div class="row">
                                            <div class="col-lg-12 col-md-12 col-12">

                                                <ul class="list-inline">
                                                    <li>1. Welcome</li>
                                                    <li>2. To</li>
                                                    <li>3. Ultra</li>
                                                    <li>4. Admin</li>
                                                    <li>5. Premium</li>
                                                    <li>6. Theme</li>
                                                    <li>7. Built</li>
                                                    <li>8. With</li>
                                                    <li>9. <i class='fa fa-heart'></i> Love</li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </section></div>

                        </div>
                    </div>


                    <div class="row margin-0">

                        <div class="col-xl-8 col-lg-8 col-md-12 col-12">
                            <section class="box ">
                                <header class="panel_header">
                                    <h2 class="title float-left">Cards</h2>
                                    <div class="actions panel_actions float-right">
                                        <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                    </div>
                                </header>
                                <div class="content-body">    <div class="row">
                                        <div class="col-lg-4 col-md-4 col-12 marginBottom15">
                                            <div class="card"  style={{width:100+'%'}}>
                                                <img class="card-img-top" src="data/blogs/blog-3.jpg" alt="Card cap" />
                                                <div class="card-body">
                                                    <h5 class="card-title">Card title</h5>
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#!" class="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="col-lg-4 col-md-4 col-12 marginBottom15">
                                            <div class="card" style={{width:100+'%'}}>
                                                <img class="card-img-top" src="data/blogs/blog-3.jpg" alt="Card cap" />
                                                <div class="card-body">
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-4 col-12 marginBottom15">
                                            <div class="card" style={{width:100+'%'}}>
                                                <div class="card-body">
                                                    <h5 class="card-title">Card title</h5>
                                                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#!" class="card-link">Card link</a>
                                                    <a href="#!" class="card-link">Another link</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section></div>


                        <div class="col-xl-4 col-lg-4 col-md-12 col-12">
                            <section class="box ">
                                <header class="panel_header">
                                    <h2 class="title float-left">Address</h2>
                                    <div class="actions panel_actions float-right">
                                        <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                    </div>
                                </header>
                                <div class="content-body">    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <address class="margin-bottom-20 margin-top-10">
                                                <strong>Twitter, Inc.</strong><br/>
                                                795 Folsom Ave, Suite 600<br/>
                                                San Francisco, CA 94107<br/>
                                                <abbr title="Phone">P:</abbr> (123) 456-7890
                                            </address>                                           
                                            <address>
                                                <strong>Full Name</strong><br/>
                                                <a href="mailto:#">BeYOUtiful@example.com</a>
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </section></div>


                        <div class="col-xl-4 col-lg-4 col-md-12 col-12">
                            <section class="box ">
                                <header class="panel_header">
                                    <h2 class="title float-left">Text Colors</h2>
                                    <div class="actions panel_actions float-right">
                                        <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                    </div>
                                </header>
                                <div class="content-body">    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <p class="text-muted">
                                                Muted text Sample
                                            </p>
                                            <p class="text-primary">
                                                Primary text Sample
                                            </p>
                                            <p class="text-success">
                                                Success text Sample
                                            </p>
                                            <p class="text-info">
                                                Info text Sample
                                            </p>
                                            <p class="text-warning">
                                                Warning text Sample
                                            </p>
                                            <p class="text-danger">
                                                Danger text Sample
                                            </p>
                                            <br/>
                                            <p class="bg-muted">
                                                Muted text Sample
                                            </p>
                                            <p class="bg-primary">
                                                Primary text Sample
                                            </p>
                                            <p class="bg-success">
                                                Success text Sample
                                            </p>
                                            <p class="bg-info">
                                                Info text Sample
                                            </p>
                                            <p class="bg-warning">
                                                Warning text Sample
                                            </p>
                                            <p class="bg-danger">
                                                Danger text Sample
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section></div>







                        <div class="col-xl-4 col-lg-4 col-md-12 col-12">
                            <section class="box ">
                                <header class="panel_header">
                                    <h2 class="title float-left">Transform & Align</h2>
                                    <div class="actions panel_actions float-right">
                                        <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                    </div>
                                </header>
                                <div class="content-body">    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-12">
                                            <p class="text-left">Left aligned text.</p>
                                            <p class="text-center">Center aligned text.</p>
                                            <p class="text-right">Right aligned text.</p>
                                            <p class="text-justify">Justified text.</p>
                                            <p class="text-nowrap">No wrap text.</p>
                                            <p class="text-lowercase">Lowercased text.</p>
                                            <p class="text-uppercase">Uppercased text.</p>
                                            <p class="text-capitalize">Capitalized text.</p>
                                        </div>
                                    </div>
                                </div>
                            </section></div>

                    </div>







                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default UITypography;

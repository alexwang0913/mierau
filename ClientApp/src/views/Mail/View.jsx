import React from 'react';
import {
   Row, Col
} from 'reactstrap';

import {  } from 'components';
import Mailmenu from 'views/Mail/Menu.jsx';

class Mailview extends React.Component{
    render(){
        return (
            <div>

                <div className="content">
                    <Row>
                        <Col md={12}>
                            

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Mail View</h1>
                        </div>
                    </div>

                    <div class="col-xl-12">
                        <section class="box nobox ">
                            <div class="content-body">    <div class="row">

                                    
                                    <Mailmenu/>


                                    <div class="col-lg-9 col-md-8 col-12">
                                        <div class="mail_content">

                                            <div class="row">
                                                <div class="col-12">

                                                    <h3 class="mail_head">View</h3>
                                                    <i class='fa fa-refresh icon-primary icon-xs icon-accent mail_head_icon'></i>
                                                    <i class='fa fa-search icon-primary icon-xs icon-accent mail_head_icon'></i>
                                                    <i class='fa fa-cog icon-primary icon-xs icon-accent mail_head_icon float-right'></i>


                                                </div>

                                                <div class="col-12 mail_view_title">

                                                    <div class="float-left">
                                                        <h3 class="">New Project Alloted to your team.</h3>
                                                    </div>

                                                    <div class='float-right'>
                                                        <button type="button" class="btn btn-default btn-icon" data-color-class="primary" data-animate=" animated fadeIn" data-toggle="tooltip" data-original-title="Reply" data-placement="top">
                                                            <i class="fa fa-reply icon-xs"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-default btn-icon" data-color-class="primary" data-animate=" animated fadeIn" data-toggle="tooltip" data-original-title="Reply All" data-placement="top">
                                                            <i class="fa fa-reply-all icon-xs"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-default btn-icon" data-color-class="primary" data-animate=" animated fadeIn" data-toggle="tooltip" data-original-title="Forward" data-placement="top">
                                                            <i class="fa fa-mail-forward icon-xs"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-default btn-icon" data-color-class="primary" data-animate=" animated fadeIn" data-toggle="tooltip" data-original-title="Attachments" data-placement="top">
                                                            <i class="fa fa-paperclip icon-xs"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-default btn-icon" data-color-class="primary" data-animate=" animated fadeIn" data-toggle="tooltip" data-original-title="Trash" data-placement="top">
                                                            <i class="fa fa-trash-o icon-xs"></i>
                                                        </button>
                                                    </div>

                                                </div>

                                                <div class="col-12 mail_view_info">

                                                    <div class="float-left">
                                                        <span class=""><strong>Bruce Wayne</strong> (brucewayne@example.com) to <strong>You</strong></span>
                                                    </div>

                                                    <div class='float-right'>
                                                        <span class='msg_ts text-muted'>12:40 PM, Today</span>
                                                    </div>

                                                </div>



                                                <div class="col-12 mail_view">
                                                    <p>Hello Jason,</p>
                                                    <h4>What is Graphic Design?</h4>
                                                    <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. Graphic design can be used for advertising, or just for entertainment intended for the mind.</p>
                                                    <br/>
                                                    <h4>Balance</h4>
                                                    <p>Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space). "Balance" is a concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance. A design composition does not have to be symmetrical or linear to be considered balanced, the balance is global to all elements even the absence of content. In this context perfectly symmetrical and linear compositions are not necessarily balanced and so asymmetrical or radial distributions of text and graphic elements can achieve balance in a composition.</p>
                                                    <br/>
                                                    <h4>Contrast</h4>
                                                    <p>Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships. For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways. Another way to describe contrast, is to say "a small object next to a large object will look smaller". As contrast in size diminishes, monotony is approached.</p>
                                                    <br/>
                                                </div>


                                                <div class="col-12 mail_view_attach">
                                                    <h3>
                                                        <i class="fa fa-paperclip icon-sm"></i> Attachments
                                                    </h3><br/>

                                                    <ul class="list-unstyled list-inline">
                                                        <li class="list-inline-item">
                                                            <a href="#!" class="file">
                                                                <img alt="attachment" src="images/mail/attach-1.png" class="img-thumbnail"/>
                                                            </a>

                                                            <a href="#!" class="title">
                                                                Project_details.jpg
                                                                <span>10KB</span>
                                                            </a>

                                                            <div class="actions">
                                                                <a href="#!">View</a> - 
                                                                <a href="#!">Download</a>
                                                            </div>
                                                        </li>

                                                        <li class="list-inline-item">
                                                            <a href="#!" class="file">
                                                                <img alt="attachment" src="images/mail/attach-2.png" class="img-thumbnail"/>
                                                            </a>

                                                            <a href="#!" class="title">
                                                                Guidlines.jpg
                                                                <span>14KB</span>
                                                            </a>

                                                            <div class="actions">
                                                                <a href="#!">View</a> - 
                                                                <a href="#!">Download</a>
                                                            </div>
                                                        </li>

                                                        <li class="list-inline-item">
                                                            <a href="#!" class="file">
                                                                <img alt="attachment" src="images/mail/attach-3.png" class="thumbnail"/>
                                                            </a>

                                                            <a href="#!" class="title">
                                                                Team_info.jpg
                                                                <span>12KB</span>
                                                            </a>

                                                            <div class="actions">
                                                                <a href="#!">View</a> - 
                                                                <a href="#!">Download</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>


                                                <div class="col-12 mail_view_reply">
                                                    <div class="form-group">
                                                        <div class="controls">
                                                            <textarea class="form-control autogrow" cols="5" id="field-7" placeholder="Reply or Forward this message" style={{overflow: 'hidden', wordWrap: 'break-word', resize: 'horizontal', height: 120+'px'}}></textarea>
                                                        </div>
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

export default Mailview;

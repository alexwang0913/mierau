import React from 'react';
import {
    Row, Col
} from 'reactstrap';

import {  } from 'components';
import Mailmenu from 'views/Mail/Menu.jsx';

class Mailcompose extends React.Component{
    render(){
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Compose</h1>
                        </div>
                    </div>                            
                                        <div class="content-body">    <div class="row">

                                    
                                    <Mailmenu/>


                                    <div class="col-lg-9 col-md-8 col-12">
                                        <div class="mail_content">

                                            <div class="row">
                                                <div class="col-12">

                                                    <h3 class="mail_head">Compose</h3>
                                                    <i class='fa fa-refresh icon-primary icon-xs icon-accent mail_head_icon'></i>
                                                    <i class='fa fa-search icon-primary icon-xs icon-accent mail_head_icon'></i>
                                                    <i class='fa fa-cog icon-primary icon-xs icon-accent mail_head_icon float-right'></i>


                                                </div>

                                                <div class="col-12 mail_view_title">

                                                    <div class='float-right'>
                                                        <button type="button" class="btn btn-default btn-icon"  data-color-class="primary" data-animate=" animated fadeIn" data-toggle="tooltip" data-original-title="Send" data-placement="top">
                                                            <i class="fa fa-paper-plane-o icon-xs"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-default btn-icon"  data-color-class="primary" data-animate=" animated fadeIn" data-toggle="tooltip" data-original-title="Save" data-placement="top">
                                                            <i class="fa fa-floppy-o icon-xs"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-default btn-icon"  data-color-class="primary" data-animate=" animated fadeIn" data-toggle="tooltip" data-original-title="Trash" data-placement="top">
                                                            <i class="fa fa-trash-o icon-xs"></i>
                                                        </button>
                                                    </div>

                                                </div>

                                                <div class="col-12 mail_view_info">

                                                    <div class="form-group mail_cc_bcc">
                                                        <label class="form-label">To:</label>
                                                        <span class="desc">e.g. "someemail@example.com"</span>
                                                        <div class="labels"><span class='badge badge-secondary cc'>CC</span> <span class='badge badge-secondary bcc'>BCC</span>
                                                        </div>
                                                        <div class="controls">
                                                            <input type="text" class="form-control mail_compose_to" value="" />
                                                        </div>
                                                    </div>

                                                    <div class="form-group mail_compose_cc">
                                                        <label class="form-label">CC:</label>
                                                        <span class="desc">e.g. "someemail@example.com"</span>
                                                        <div class="controls">
                                                            <input type="text" class="form-control mail_compose_to" value="" />
                                                        </div>
                                                    </div>

                                                    <div class="form-group mail_compose_bcc">
                                                        <label class="form-label">BCC:</label>
                                                        <span class="desc">e.g. "someemail@example.com"</span>
                                                        <div class="controls">
                                                            <input type="text" class="form-control mail_compose_to" value="" />
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="form-label">Subject:</label>
                                                        <span class="desc">e.g. "Meeting in 1st week"</span>
                                                        <div class="controls">
                                                            <input type="text" class="form-control" value="" />
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="form-label">Message:</label>
                                                        <textarea class="mail-compose-editor" placeholder="Enter text ..." style={{width: 100+'%',height: 250+'px',fontSize: 14+'px',lineHeight: 23+'px',padding: 15+'px'}}></textarea>
                                                    </div>



                                                </div>





                                                <div class="col-12">

                                                    <div class='float-left'>
                                                        <button type="button" class="btn btn-primary">
                                                            <i class="fa fa-paper-plane-o icon-xs"></i> &nbsp; SEND
                                                        </button>
                                                        <button type="button" class="btn btn-purple">
                                                            <i class="fa fa-floppy-o icon-xs"></i> &nbsp; SAVE
                                                        </button>
                                                        <button type="button" class="btn btn-secondary">
                                                            <i class="fa fa-trash-o icon-xs"></i> &nbsp; TRASH
                                                        </button>
                                                    </div>

                                                </div>





                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Mailcompose;

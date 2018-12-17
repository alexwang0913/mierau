import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UICode extends React.Component{
   
    
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
                                <h2 class="title float-left">Code</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">    <div class="row">
                                    <div class="col-12">
                                        <div class="col-lg-12 col-md-12 col-12">
                                            For example, <code>&lt;section&gt;</code> should be wrapped as inline.

                                            <br/><div class="spacer"></div>

                                            To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br/>
                                            To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>

                                            <br/><div class="spacer"></div>

                                            <pre>&lt;p&gt;Sample text here...&lt;/p&gt;</pre>

                                            <br/><div class="spacer"></div>

                                            <code>&lt;section&gt;</code> should be wrapped as inline.
                                            <br/><div class="spacer"></div>
                                            <var>y</var> = <var>m</var><var>x</var> + <var>b</var>

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

export default UICode;

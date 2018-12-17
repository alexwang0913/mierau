import React from 'react';
import {
    Badge,
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UIBadges extends React.Component{
    

    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Badges</h1>
                        </div>
                    </div>





                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Badges</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-12">
                            

                            
<h5>Badges</h5>
<div>
        <h1>Heading <Badge color="secondary">New</Badge></h1>
        <h2>Heading <Badge color="secondary">New</Badge></h2>
        <h3>Heading <Badge color="secondary">New</Badge></h3>
        <h4>Heading <Badge color="secondary">New</Badge></h4>
        <h5>Heading <Badge color="secondary">New</Badge></h5>
        <h6>Heading <Badge color="secondary">New</Badge></h6>
      </div>

<br/><br/>
<h5>Colors</h5>

<div>
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="danger">Danger</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="info">Info</Badge>
        <Badge color="light">Light</Badge>
        <Badge color="dark">Dark</Badge>
      </div>

<br/><br/>
<h5>Pills</h5>

<div>
        <Badge color="primary" pill>Primary</Badge>
        <Badge color="secondary" pill>Secondary</Badge>
        <Badge color="success" pill>Success</Badge>
        <Badge color="danger" pill>Danger</Badge>
        <Badge color="warning" pill>Warning</Badge>
        <Badge color="info" pill>Info</Badge>
        <Badge color="light" pill>Light</Badge>
        <Badge color="dark" pill>Dark</Badge>
      </div>

<br/><br/>
<h5>Links</h5>
 <div>
        <Badge href="#!" color="primary">Primary</Badge>
        <Badge href="#!" color="secondary">Secondary</Badge>
        <Badge href="#!" color="success">Success</Badge>
        <Badge href="#!" color="danger">Danger</Badge>
        <Badge href="#!" color="warning">Warning</Badge>
        <Badge href="#!" color="info">Info</Badge>
        <Badge href="#!" color="light">Light</Badge>
        <Badge href="#!" color="dark">Dark</Badge>
      </div>



                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default UIBadges;

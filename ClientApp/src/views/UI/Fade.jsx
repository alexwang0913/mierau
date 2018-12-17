import React from 'react';
import {
    Button, Fade,
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UIFade extends React.Component{
   constructor(props) {
        super(props);
        this.state = { fadeIn: true };
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
    
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Fade</h1>
                        </div>
                    </div>




                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Fade Toggle</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-12">
                            

                            
            <div>
                <Button color="primary" onClick={this.toggle}>Toggle Fade</Button>
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                    This content will fade in and out as the button is pressed
                </Fade>
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

export default UIFade;

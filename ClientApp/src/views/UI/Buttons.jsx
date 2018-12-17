import React from 'react';
import {
    Button,ButtonGroup ,
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UIButtons extends React.Component{
    constructor (props) {
    super(props);
    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);

  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }
  
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Buttons</h1>
                        </div>
                    </div>



                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Buttons</h2>
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
        <Button color="primary">primary</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}
        <Button color="success">success</Button>{' '}
        <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button>{' '}
        <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button>
      </div>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>


                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Button sizes</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-12">

                                           <div class="btn-sizes">
                                                <p>
                                                    <button type="button" class="btn btn-success btn-xs">Extra small button</button>
                                                </p>
                                                <p>
                                                    <button type="button" class="btn btn-warning btn-sm">Small size button</button>
                                                </p>
                                                <p>
                                                    <button type="button" class="btn btn-danger">Default size button</button>
                                                </p>
                                                <p>
                                                    <button type="button" class="btn btn-info btn-lg">Large size button</button>
                                                </p>
                                            </div>

                                        
                                        <div className="clearfix"></div>
                                        <br/>

                                        <Button color="primary" size="sm">Small Button</Button>{' '}
                                        <Button color="secondary" size="sm">Small Button</Button>
                                        
                                        <div className="clearfix"></div>
                                        <br/>
                                        
                                        <Button color="primary" size="lg">Large Button</Button>{' '}
                                        <Button color="secondary" size="lg">Large Button</Button>
                                        
                                        <div className="clearfix"></div>
                                        <br/>
                                        
                                        <Button color="primary" size="lg" block>Block level button</Button>
                                        <Button color="secondary" size="lg" block>Block level button</Button>
                                        
                                        <div className="clearfix"></div>
                                        <br/>


 
                                        </div>
                                </div>


                            </div>
                        </section>
                    </div>

                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Active state Buttons</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-12">



<Button color="primary" size="lg" active>Primary link</Button>{' '}
<Button color="secondary" size="lg" active>Link</Button>



                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>

                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Disabled Buttons</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-12">


<Button color="primary" size="lg" disabled>Primary button</Button>{' '}
<Button color="secondary" size="lg" disabled>Button</Button>




                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>

                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Stateful Buttons</h2>
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
        <h5>Radio Buttons</h5>
        <ButtonGroup>
          <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>
        </ButtonGroup>
        <p>Selected: {this.state.rSelected}</p>

        <h5>Checkbox Buttons</h5>
        <ButtonGroup>
          <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>
          <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>
          <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>
        </ButtonGroup>
        <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
      </div>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>





                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Colors</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">    <div class="row btn-colors">
                                    <div class="col-lg-12">
                                        <button type="button" class="btn btn-default">Default</button>
                                        <button type="button" class="btn btn-primary">Primary</button>
                                        <button type="button" class="btn btn-success">Success</button>
                                        <button type="button" class="btn btn-info">Info</button>

                                        <button type="button" class="btn btn-warning">Warning</button>
                                        <button type="button" class="btn btn-danger">Danger</button>
                                        <button type="button" class="btn btn-purple">Purple</button>
                                        <button type="button" class="btn btn-purple">Purple</button>

                                        <button type="button" class="btn btn-secondary">Secondary</button>



                                    </div>
                                </div>
                            </div>
                        </section></div>



                    <div class="clearfix"></div>

                    <div class="row margin-0">
                        <div class="col-xl-6 col-lg-6 col-md-12 col-12">
                            <section class="box ">
                                <header class="panel_header">
                                    <h2 class="title float-left">Iconic</h2>
                                    <div class="actions panel_actions float-right">
                                        <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                    </div>
                                </header>
                                <div class="content-body">    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-12 btn-iconic">
                                            <button type="button" class="btn btn-primary"><i class="fa fa-dashboard"></i></button>
                                            <button type="button" class="btn btn-primary"><i class="fa fa-arrows"></i></button>
                                            <button type="button" class="btn btn-primary"><i class="fa fa-bell"></i></button>
                                            <button type="button" class="btn btn-purple"><i class="fa fa-book"></i></button>
                                            <button type="button" class="btn btn-purple"><i class="fa fa-bank"></i></button>
                                            <button type="button" class="btn btn-purple"><i class="fa fa-car"></i></button>
                                            <button type="button" class="btn btn-warning"><i class="fa fa-magic"></i></button>
                                            <button type="button" class="btn btn-warning"><i class="fa fa-rocket"></i></button>
                                            <button type="button" class="btn btn-warning"><i class="fa fa-camera"></i></button>
                                            <button type="button" class="btn btn-purple"><i class="fa fa-comment"></i></button>
                                            <button type="button" class="btn btn-purple"><i class="fa fa-database"></i></button>
                                            <button type="button" class="btn btn-purple"><i class="fa fa-envelope"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </section></div>

                        <div class="col-xl-6 col-lg-6 col-md-12 col-12">
                            <section class="box ">
                                <header class="panel_header">
                                    <h2 class="title float-left">Social Media</h2>
                                    <div class="actions panel_actions float-right">
                                        <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                    </div>
                                </header>
                                <div class="content-body">    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-12 btn-social">
                                            <button type="button" class="btn btn-primary facebook"><i class="fa fa-facebook"></i></button>
                                            <button type="button" class="btn btn-primary twitter"><i class="fa fa-twitter"></i></button>
                                            <button type="button" class="btn btn-primary google-plus"><i class="fa fa-google-plus"></i></button>
                                            <button type="button" class="btn btn-primary dribbble"><i class="fa fa-dribbble"></i></button>
                                            <button type="button" class="btn btn-primary youtube"><i class="fa fa-youtube"></i></button>
                                            <button type="button" class="btn btn-primary vimeo"><i class="fa fa-vimeo-square"></i></button>
                                            <button type="button" class="btn btn-primary flickr"><i class="fa fa-flickr"></i></button>
                                            <button type="button" class="btn btn-primary rss"><i class="fa fa-rss"></i></button>
                                            <button type="button" class="btn btn-primary skype"><i class="fa fa-skype"></i></button>
                                            <button type="button" class="btn btn-primary linkedin"><i class="fa fa-linkedin"></i></button>
                                            <button type="button" class="btn btn-primary android"><i class="fa fa-android"></i></button>
                                            <button type="button" class="btn btn-primary apple"><i class="fa fa-apple"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </section></div>
                    </div>



                    <div class="row margin-0">
                        <div class="col-xl-6 col-lg-6 col-md-12 col-12">
                            <section class="box ">
                                <header class="panel_header">
                                    <h2 class="title float-left">Text & Icons</h2>
                                    <div class="actions panel_actions float-right">
                                        <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                    </div>
                                </header>
                                <div class="content-body">    <div class="row btn-texticons">
                                        <div class="col-lg-12">
                                            <button class="btn btn-secondary btn-icon bottom15 right15">
                                                <i class="fa fa-heart"></i> &nbsp; <span>Like</span>
                                            </button>

                                            <button class="btn btn-purple btn-icon bottom15 right15">
                                                <i class="fa fa-car"></i> &nbsp; <span>Launch</span>
                                            </button>

                                            <button class="btn btn-purple btn-icon bottom15 right15">
                                                <i class="fa fa-shopping-cart"></i> &nbsp; <span>Buy</span>
                                            </button>

                                            <button class="btn btn-success btn-icon bottom15 right15">
                                                <i class="fa fa-road"></i> &nbsp; <span>Success</span>
                                            </button>
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

export default UIButtons;

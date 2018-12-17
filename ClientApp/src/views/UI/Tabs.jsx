import React from 'react';
import {
    TabContent, TabPane, Nav, NavItem, NavLink, Button, CardText,
     Card, CardTitle, Row, Col,
} from 'reactstrap';

import classnames from 'classnames';

import {
    
} from 'components';

class UITabs extends React.Component{
    constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.state = {
      activeTab: '1',
      activeTab1: '1',
      activeTab2: '1',
      activeTab3: '1',
      activeTab4: '1',
      activeTab5: '1'
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  toggle1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab
      });
    }
  }
  toggle2(tab) {
    if (this.state.activeTab2 !== tab) {
      this.setState({
        activeTab2: tab
      });
    }
  }
  toggle3(tab) {
    if (this.state.activeTab3 !== tab) {
      this.setState({
        activeTab3: tab
      });
    }
  }
  toggle4(tab) {
    if (this.state.activeTab4 !== tab) {
      this.setState({
        activeTab4: tab
      });
    }
  }
  toggle5(tab) {
    if (this.state.activeTab5 !== tab) {
      this.setState({
        activeTab5: tab
      });
    }
  }

    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Tabs</h1>
                        </div>
                    </div>


                    


                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Tabs</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-12">

        
<h5>Left Aligned Tabs</h5>                                    
<br/>
    <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
             <i className="fa fa-home"></i> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              <i className="fa fa-user"></i> Profile
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>

                                                        <div>

                                                            <p>You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using in a plugin.</p>
                                                            <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to.</p>


                                                        </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>




<br/>
<br/>



<h5>Right Aligned Tabs</h5>                                    
<br/>

    <div>
        <Nav tabs className="horizontal right-aligned">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab1 === '1' })}
              onClick={() => { this.toggle1('1'); }}
            >
             <i className="fa fa-home"></i> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab1 === '2' })}
              onClick={() => { this.toggle1('2'); }}
            >
              <i className="fa fa-user"></i> Profile
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab1}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>

                                                        <div>

                                                            <p>You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using in a plugin.</p>
                                                            <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to.</p>


                                                        </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>




<br/>
<br/>



<h5>Primary Tabs</h5>                                    
<br/>

    <div>
        <Nav tabs className="horizontal primary left-aligned">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab2 === '1' })}
              onClick={() => { this.toggle2('1'); }}
            >
             <i className="fa fa-home"></i> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab2 === '2' })}
              onClick={() => { this.toggle2('2'); }}
            >
              <i className="fa fa-user"></i> Profile
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab2} className="horizontal primary left-aligned">
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>

                                                        <div>

                                                            <p>You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using in a plugin.</p>
                                                            <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to.</p>


                                                        </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2" className="horizontal primary left-aligned">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>






<br/>
<br/>



<h5>Primary Right Aligned Tabs</h5>                                    
<br/>

    <div>
        <Nav tabs className="horizontal primary right-aligned">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab3 === '1' })}
              onClick={() => { this.toggle3('1'); }}
            >
             <i className="fa fa-home"></i> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab3 === '2' })}
              onClick={() => { this.toggle3('2'); }}
            >
              <i className="fa fa-user"></i> Profile
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab3} className="horizontal primary right-aligned">
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>

                                                        <div>

                                                            <p>You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using in a plugin.</p>
                                                            <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to.</p>


                                                        </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>


<br/>
<br/>


<h5>Vertical Tabs</h5>                                    
<br/>

    <div>
        <Nav tabs className="vertical left-aligned col-lg-2 col-xl-2 col-md-3 col-3">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab4 === '1' })}
              onClick={() => { this.toggle4('1'); }}
            >
             <i className="fa fa-home"></i> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab4 === '2' })}
              onClick={() => { this.toggle4('2'); }}
            >
              <i className="fa fa-user"></i> Profile
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab4} className="vertical left-aligned  col-lg-10 col-xl-10 col-md-9 col-9">
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>

                                                        <div>

                                                            <p>You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using in a plugin.</p>
                                                            <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to.</p>


                                                        </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>

<div className="clearfix"></div>
<br/>
<br/>



<h5>Primary Vertical Tabs</h5>                                    
<br/>

    <div>
        <Nav tabs className="vertical primary left-aligned col-lg-2 col-xl-2 col-md-3 col-3">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab5 === '1' })}
              onClick={() => { this.toggle5('1'); }}
            >
             <i className="fa fa-home"></i> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab5 === '2' })}
              onClick={() => { this.toggle5('2'); }}
            >
              <i className="fa fa-user"></i> Profile
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab5} className="vertical primary left-aligned  col-lg-10 col-xl-10 col-md-9 col-9">
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>

                                                        <div>

                                                            <p>You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using in a plugin.</p>
                                                            <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to.</p>


                                                        </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
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

export default UITabs;

import React from 'react';
import {
    TabContent, TabPane, Nav, NavItem, NavLink,
    Row, Col,
} from 'reactstrap';

import classnames from 'classnames';

import PerfectScrollbar from 'perfect-scrollbar';

import {
    
} from 'components';

var ps;


class BlogSearch extends React.Component{
   
    constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
    componentDidMount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.searcharea,{suppressScrollX: true, suppressScrollY: false});
        }
    }
    componentWillUnmount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
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
                            <h1 class="title">Search</h1>
                        </div>
                    </div>


                            
    

    
                    <div class="col-xl-12">
                        <section class="box nobox ">
                            <div class="content-body">    <div class="row">


                                    <div class="col-lg-9 col-md-12 col-12">

                                        <div class="input-group primary">
                                            <span class="input-group-addon" style={{padding: ''+7+'px '+13+'px', height: 37+'px'}}>                
                                                <span class="arrow"></span>
                                                <i class="fa fa-search"></i>
                                            </span>
                                            <input type="text" class="form-control search-page-input" placeholder="Search" value="Graphic Design" />
                                        </div><br/>
                                    </div>
                                    <div class="col-lg-3 col-md-12 col-12">
                                        <nav aria-label="Page navigation" class="float-right">
                                            <ul class="pagination">
                                                <li class="page-item">
                                                    <a class="page-link" href="#!" aria-label="Previous">
                                                        <span aria-hidden="true">«</span>
                                                        <span class="sr-only">Previous</span>
                                                    </a>
                                                </li>
                                                <li class="page-item"><a class="page-link" href="#!">1</a></li>
                                                <li class="page-item"><a class="page-link" href="#!">2</a></li>
                                                <li class="page-item"><a class="page-link" href="#!">3</a></li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#!" aria-label="Next">
                                                        <span aria-hidden="true">»</span>
                                                        <span class="sr-only">Next</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>

                                    <div class="clearfix"></div><br/>


                                    <div class="col-lg-12 search_data">




                            

    <div>
        <Nav tabs className="vertical left-aligned col-lg-2 col-xl-2 col-md-3 col-3">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              <i class="fa fa-home"></i> Web
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              <i class="fa fa-image"></i> Images
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              <i class="fa fa-user"></i> Contacts
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              <i class="fa fa-bank"></i> Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              <i class="fa fa-location-arrow"></i> Maps
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => { this.toggle('6'); }}
            >
              <i class="fa fa-envelope"></i> Messages
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '7' })}
              onClick={() => { this.toggle('7'); }}
            >
              <i class="fa fa-share"></i> Profile
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab} className="vertical left-aligned  col-lg-10 col-xl-10 col-md-9 col-9">
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
              <div ref="searcharea" style={{position: 'relative', height: 600+'px'}}>

                                                <div class="search_result">
                                                    <div class="float-left col-md-2 col-3"><img alt="search-result" class="img-fluid" src="images/search/1.png" /></div>
                                                    <div class="float-left col-md-10 col-9">
                                                        <h4><a href="#!">Contrast and Similiarity in Graphic Desigh</a></h4>
                                                        <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. <a href="#!" class="float-right"><small>Read More...</small></a></p>
                                                    </div>
                                                </div>
                                                <div class="search_result">
                                                    <div class="float-left col-md-2 col-3"><img alt="search-result" class="img-fluid" src="images/search/2.png" /></div>
                                                    <div class="float-left col-md-10 col-9">
                                                        <h4><a href="#!">Contrast and Similiarity in Graphic Desigh</a></h4>
                                                        <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. <a href="#!" class="float-right"><small>Read More...</small></a></p>
                                                    </div>
                                                </div>
                                                <div class="search_result">
                                                    <div class="float-left col-md-2 col-3"><img alt="search-result" class="img-fluid" src="images/search/3.png" /></div>
                                                    <div class="float-left col-md-10 col-9">
                                                        <h4><a href="#!">Contrast and Similiarity in Graphic Desigh</a></h4>
                                                        <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. <a href="#!" class="float-right"><small>Read More...</small></a></p>
                                                    </div>
                                                </div>
                                                <div class="search_result">
                                                    <div class="float-left col-md-2 col-3"><img alt="search-result" class="img-fluid" src="images/search/4.png"/></div>
                                                    <div class="float-left col-md-10 col-9">
                                                        <h4><a href="#!">Contrast and Similiarity in Graphic Desigh</a></h4>
                                                        <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. <a href="#!" class="float-right"><small>Read More...</small></a></p>
                                                    </div>
                                                </div>
                                                <div class="search_result">
                                                    <div class="float-left col-md-2 col-3"><img alt="search-result" class="img-fluid" src="images/search/3.png"/></div>
                                                    <div class="float-left col-md-10 col-9">
                                                        <h4><a href="#!">Contrast and Similiarity in Graphic Desigh</a></h4>
                                                        <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. <a href="#!" class="float-right"><small>Read More...</small></a></p>
                                                    </div>
                                                </div>
                                                <div class="search_result">
                                                    <div class="float-left col-md-2 col-3"><img alt="search-result" class="img-fluid" src="images/search/1.png"/></div>
                                                    <div class="float-left col-md-10 col-9">
                                                        <h4><a href="#!">Contrast and Similiarity in Graphic Desigh</a></h4>
                                                        <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. <a href="#!" class="float-right"><small>Read More...</small></a></p>
                                                    </div>
                                                </div>
                                                <div class="search_result">
                                                    <div class="float-left col-md-2 col-3"><img alt="search-result" class="img-fluid" src="images/search/2.png"/></div>
                                                    <div class="float-left col-md-10 col-9">
                                                        <h4><a href="#!">Contrast and Similiarity in Graphic Desigh</a></h4>
                                                        <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. <a href="#!" class="float-right"><small>Read More...</small></a></p>
                                                    </div>
                                                </div>
                </div>                                                
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">

                                                <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to disable the data attribute API by unbinding all events on the document namespaced with data-api. </p>
                                                <p>You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using in a plugin.</p>
                                                <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to. </p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                                                <p>We also believe you should be able to use all Bootstrap plugins purely through the JavaScript API. All public APIs are single, chainable methods, and return the collection acted upon.</p>
                                                <p>Don't use data attributes from multiple plugins on the same element. For example, a button cannot both have a tooltip and toggle a modal. To accomplish this, use a wrapping element.</p>                    
                                                <p>You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using in a plugin.</p>
                                                <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to. </p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">

                                                <p>Don't use data attributes from multiple plugins on the same element. For example, a button cannot both have a tooltip and toggle a modal. To accomplish this, use a wrapping element.</p>
                                                <p>You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using in a plugin.</p>
                                                <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to. </p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col sm="12">

                                                <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to disable the data attribute API by unbinding all events on the document namespaced with data-api. </p>
                                                <p>You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using in a plugin.</p>
                                                <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to. </p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="6">
            <Row>
              <Col sm="12">
                                                <p>We also believe you should be able to use all Bootstrap plugins purely through the JavaScript API. All public APIs are single, chainable methods, and return the collection acted upon.</p>
                                                <p>Don't use data attributes from multiple plugins on the same element. For example, a button cannot both have a tooltip and toggle a modal. To accomplish this, use a wrapping element.</p>                    
                                                <p>You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using in a plugin.</p>
                                                <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to. </p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="7">
            <Row>
              <Col sm="12">

                                                <p>Don't use data attributes from multiple plugins on the same element. For example, a button cannot both have a tooltip and toggle a modal. To accomplish this, use a wrapping element.</p>
                                                <p>You can use all Bootstrap plugins purely through the markup API without writing a single line of JavaScript. This is Bootstrap's first-class API and should be your first consideration when using in a plugin.</p>
                                                <p>That said, in some situations it may be desirable to turn this functionality off. Therefore, we also provide the ability to. </p>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
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

export default BlogSearch;

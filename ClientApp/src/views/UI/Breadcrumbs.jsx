import React from 'react';
import {
  Breadcrumb, BreadcrumbItem,
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class UIBreadcrumbs extends React.Component{
   
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Breadcrumbs</h1>
                        </div>
                    </div>



                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Breadcrumbs</h2>
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
      <Breadcrumb>
        <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem><a href="#!">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem><a href="#!">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#!">Library</a></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </div>
<div>
      <Breadcrumb tag="nav">
        <BreadcrumbItem tag="a" href="#!">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#!">Library</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#!">Data</BreadcrumbItem>
        <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
      </Breadcrumb>
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

export default UIBreadcrumbs;

import React from 'react';
import {
     Row, Col
} from 'reactstrap';

import {  } from 'components';
//import styles from 'jvectormap/jquery-jvectormap.css'
import { VectorMap } from 'react-jvectormap';

class UIVectorMap extends React.Component{
    render(){
        return (
            <div>
                <div className="content">
                    <Row>
                        <Col md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Vector Map</h1>
                        </div>
                    </div>






                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Vector Map</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">    
                            <div class="row">
                                    <div class="col-12">
                                        <div class="wid-vectormap">
                                            <div class="row">
                                                <div class="col-12 col-md-12">
                                    <div style={{width: 100+'%', height: 400}}>
                                        <VectorMap map={'world_mill'}
                                                   backgroundColor="#ffffff"
                                                   ref="map"
                                                   containerStyle={{
                                                       width: '100%',
                                                       height: '100%',
                                                   }}
                                                   containerClassName="map"
                                        />
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

export default UIVectorMap;

import React from 'react';
import {

    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }


class MasonryGallery extends React.Component{
   
    
    render(){

        const elements = [
            {src: "unsplash.it/250/305?image=1011"},
            {src: "unsplash.it/250/320?image=883"},
            {src: "unsplash.it/250/230?image=1074"},
            {src: "unsplash.it/250/290?image=823"},
            {src: "unsplash.it/250/215?image=64"},
            {src: "unsplash.it/250/335?image=65"},
            {src: "unsplash.it/250/305?image=839"},
            {src: "unsplash.it/250/260?image=314"},
            {src: "unsplash.it/250/200?image=256"},
            {src: "unsplash.it/250/320?image=316"},
            {src: "unsplash.it/250/215?image=92"},
            {src: "unsplash.it/250/245?image=643"}
        ];
        
        const childElements = elements.map(function(element){
           return (
                <li className="image-element-class">
                    <img src={"https://" + element.src} alt="masonry" />
                </li>
            );
        });

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Gallery</h1>
                        </div>
                    </div>


                    <div class="col-xl-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Masonry Gallery</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">    
                                <div class="row">
                                    <div class="col-12">

                            
                                               <Masonry
                                                    className={'masonry-gallery'}
                                                    elementType={'ul'} 
                                                    options={masonryOptions}
                                                    disableImagesLoaded={false}
                                                    updateOnEachImageLoad={false}
                                                    imagesLoadedOptions={imagesLoadedOptions}
                                                >
                                                    {childElements}
                                                </Masonry>


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

export default MasonryGallery;

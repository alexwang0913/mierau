import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';



const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const wrapperStyle = { width: 500, margin: 0 };

class FormSlider extends React.Component{
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Sliders</h1>
                        </div>
                    </div>


                              
                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Sliders</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-8 col-md-9 col-10">

                                    
                                    <div class="form-group">
                                            <label class="form-label" for="field-1">Slider with custom handle</label>
                                      <div style={wrapperStyle}>
                                      <Slider min={0} max={20} defaultValue={3} />
                                      </div>
                                    </div>
                                    <br/>
                                    
                                    <div class="form-group">
                                          <label class="form-label" for="field-1">Slider with custom handle</label>
                                      <div style={wrapperStyle}>
                                      <Range min={0} max={20} defaultValue={[3, 10]} />
                                      </div>
                                    </div>
                                    <br/>

                                    

                                    <div class="form-group">
                                            <label class="form-label" for="field-1">Slider with custom handle</label>
                                        <div style={wrapperStyle}>
                                          <Slider min={0} max={20} defaultValue={3} handle={handle} />
                                        </div>
                                    </div>
                                    <br/>



                                     <div class="form-group">
                                            <label class="form-label" for="field-1">Range with custom handle</label>
                                        <div style={wrapperStyle}>
                                          <Range min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
                                        </div>
                                    </div>
                                    <br/>
                                

                                      <div class="form-group">
                                            <label class="form-label" for="field-1">Pushable</label>
                                        <div style={wrapperStyle}>
                                          <Range min={0} max={20} defaultValue={[3, 5, 10]} tipFormatter={value => `${value}%`} pushable={5} />
                                        </div>
                                    </div>
                                    <br/>


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

export default FormSlider;

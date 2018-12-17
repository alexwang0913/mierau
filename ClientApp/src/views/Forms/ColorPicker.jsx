import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import 'rc-color-picker/assets/index.css';
import ColorPicker from 'rc-color-picker';
import { Panel as ColorPickerPanel } from 'rc-color-picker';


class FormColorPicker extends React.Component{
    constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleChange() {     }
   
 onChange(obj) {
  console.log(obj);
}

 changeHandler(obj) {
  console.log(obj);
}
 closeHandler(obj) {
  console.log(obj);
}

    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Color Picker</h1>
                        </div>
                    </div>


                            




                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Color Picker</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-8 col-md-9 col-10">

                                        <h4>Basic</h4>
                                        <div style={{ margin: '20px 20px 20px', textAlign: 'left' }}>
                                            <ColorPicker
                                              animation="slide-up"
                                              color={'#36c'}
                                              onChange={this.handleChange}
                                            />

                                          </div>


<br/>
<br/>

<div style={{}}>
<h4>RGB</h4>
    <ColorPickerPanel enableAlpha={false} color={'#345679'} onChange={this.onChange} mode="RGB" />
</div>

<br/>
<br/>

<div>
<h4>HSB</h4>
    <ColorPickerPanel alpha={80} color={'#477898'} onChange={this.onChange} mode="HSB" />
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

export default FormColorPicker;

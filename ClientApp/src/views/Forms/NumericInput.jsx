import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

import NumericInput from 'react-numeric-input';

class FormNumericInput extends React.Component{

    constructor (props) {
        super(props)
        this.state = {
          content: 'content',
        };
        this.myFormat = this.myFormat.bind(this);
      }

      updateContent(newContent) {
        this.setState({
          content: newContent
        });
      }

      myFormat(num) {
          return num + '$';
      }


    render(){
        

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Numeric Input</h1>
                        </div>
                    </div>

      
                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Numeric Input</h2>
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
                                        <label class="form-label" for="field-1">Basic</label>
                                      <NumericInput className="form-control"/>
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="field-1">No style</label>
                                        <NumericInput className="form-control"/>
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="field-1">Typical</label>
                                        <NumericInput className="form-control" min={0} max={100} value={50}/>
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="field-1">Floats</label>
                                        <NumericInput className="form-control" step={0.1} precision={2} value={50.3}/>
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="field-1">Formats</label>
                                        <NumericInput className="form-control" precision={2} value={50.3} step={0.1} format={this.myFormat}/>
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="field-1">Disabled</label>
                                        <NumericInput className="form-control" disabled value={23.45}/>
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="field-1">Read only</label>
                                        <NumericInput className="form-control" readOnly value={23.45}/>
                                    </div>

                                    <div class="form-group">
                                        <label class="form-label" for="field-1">Mobile Version</label>
                                        <NumericInput className="form-control" mobile />
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

export default FormNumericInput;

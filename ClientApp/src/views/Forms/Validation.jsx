import React from 'react';
import {
    Row, Col, Form, FormFeedback, Input , Label
} from 'reactstrap';

import {
    
} from 'components';

import { ValidatingFormGroup } from 'reactstrap-validation';

export interface HelloProps {
  initialValid?: boolean;
}

class FormValidation extends React.Component{
    

    render(){

        const { initialValid } = this.props;

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Form Validation</h1>
                        </div>
                    </div>


                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Form Validation</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-8 col-md-9 col-10">
             
                            

                                    <Form>
                                        <ValidatingFormGroup trigger="change" valid={initialValid} onStateChange={console.log}>
                                          <Label>Email validation</Label>
                                          <Input className="form-control" required type="email" />
                                          <FormFeedback>
                                          </FormFeedback>
                                        </ValidatingFormGroup>
                                      </Form>


                                
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

export default FormValidation;

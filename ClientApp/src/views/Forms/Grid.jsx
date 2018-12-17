import React from 'react';
import {
    Button, Form, FormGroup, Label, Input, FormText,
    
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class FormGrid extends React.Component{

    constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false
    };
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }


    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Form Grid</h1>
                        </div>
                    </div>



                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Form grid</h2>
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
        <FormGroup row>
          <Label for="exampleEmail" sm={12}>Email</Label>
          <Col sm={12}>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={12}>Password</Label>
          <Col sm={12}>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={12}>Select</Label>
          <Col sm={12}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelectMulti" sm={12}>Select Multiple</Label>
          <Col sm={12}>
            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={12}>Text Area</Label>
          <Col sm={12}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={12}>File</Label>
          <Col sm={12}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup tag="fieldset" row>
          <label className="col-form-label col-sm-2">Radio Buttons</label>
          <Col sm={12}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Option one is this and that—be sure to include why it's great
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Option two can be something else and selecting it will deselect option one
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input type="radio" name="radio2" disabled />{' '}
                Option three is disabled
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="checkbox2" sm={12}>Checkbox</Label>
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" />{' '}
                Check me out
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup>
            <Button>Submit</Button>
        </FormGroup>
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

export default FormGrid;

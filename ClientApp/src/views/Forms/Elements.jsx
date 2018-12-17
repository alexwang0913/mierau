import React from 'react';
import {
    Button, Form, FormGroup, Label, Input, FormText, FormFeedback,
    InputGroup, InputGroupAddon, InputGroupText,   InputGroupButtonDropdown,
    Row, Col,  DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';

import {
} from 'components';

class FormElements extends React.Component{

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
                            <h1 class="title">Form Elements</h1>
                        </div>
                    </div>





                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Basic Elements</h2>
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
                                            <FormGroup>
                                              <Label for="exampleEmail">Email</Label>
                                              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                            </FormGroup>
                                            <FormGroup>
                                              <Label for="examplePassword">Password</Label>
                                              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                                            </FormGroup>
                                            <FormGroup>
                                              <Label for="exampleSelect">Select</Label>
                                              <Input type="select" name="select" id="exampleSelect">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                              </Input>
                                            </FormGroup>
                                            <FormGroup>
                                              <Label for="exampleSelectMulti">Select Multiple</Label>
                                              <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                              </Input>
                                            </FormGroup>
                                            <FormGroup>
                                              <Label for="exampleText">Text Area</Label>
                                              <Input type="textarea" name="text" id="exampleText" />
                                            </FormGroup>
                                            <FormGroup>
                                              <Label for="exampleFile">File</Label>
                                              <Input type="file" name="file" id="exampleFile" />
                                              <FormText color="muted">
                                                This is some placeholder block-level help text for the above input.
                                                It's a bit lighter and easily wraps to a new line.
                                              </FormText>
                                            </FormGroup>
                                            <FormGroup tag="fieldset">
                                              <legend>Radio Buttons</legend>
                                              <FormGroup check>
                                                <Label check>
                                                  <Input type="radio" name="radio1" />{' '}
                                                  Option one is this and that—be sure to include why it's great
                                                </Label>
                                              </FormGroup>
                                              <FormGroup check>
                                                <Label check>
                                                  <Input type="radio" name="radio1" />{' '}
                                                  Option two can be something else and selecting it will deselect option one
                                                </Label>
                                              </FormGroup>
                                              <FormGroup check disabled>
                                                <Label check>
                                                  <Input type="radio" name="radio1" disabled />{' '}
                                                  Option three is disabled
                                                </Label>
                                              </FormGroup>
                                            </FormGroup>
                                            <FormGroup check>
                                              <Label check>
                                                <Input type="checkbox" />{' '}
                                                Check me out
                                              </Label>
                                            </FormGroup>
                                            <Button>Submit</Button>
                                          </Form>



                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                       
                       
                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Inline Form</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-12">



<Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>


                                    </div>
                                </div>


                            </div>
                        </section>
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
       <FormGroup>
          <Label for="exampleEmail">Input without validation</Label>
          <Input />
          <FormFeedback>You will not be able to see this</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Valid input</Label>
          <Input valid />
          <FormFeedback valid>Sweet! that name is available</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Invalid input</Label>
          <Input invalid />
          <FormFeedback>Oh noes! that name is already taken</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Input without validation</Label>
          <Input />
          <FormFeedback tooltip>You will not be able to see this</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Valid input</Label>
          <Input valid />
          <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Invalid input</Label>
          <Input invalid />
          <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
      </Form>



                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                    
                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Form input types</h2>
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
        <FormGroup>
          <Label for="exampleEmail">Plain Text (Static)</Label>
          <Input plaintext>Some plain text/ static value</Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleUrl">Url</Label>
          <Input type="url" name="url" id="exampleUrl" placeholder="url placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Number</Label>
          <Input type="number" name="number" id="exampleNumber" placeholder="number placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDatetime">Datetime</Label>
          <Input type="datetime" name="datetime" id="exampleDatetime" placeholder="datetime placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleTime">Time</Label>
          <Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleColor">Color</Label>
          <Input type="color" name="color" id="exampleColor" placeholder="color placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSearch">Search</Label>
          <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
      </Form>



                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                    
                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Checkboxes inline</h2>
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
        <FormGroup check inline>
          <Label check>
            <Input type="checkbox" /> Some input
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
             <Input type="checkbox" /> Some other input
          </Label>
        </FormGroup>
      </Form>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                    
                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Sizing</h2>
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

        <FormGroup>
          <Input placeholder="lg" bsSize="lg" />
        </FormGroup>
        <FormGroup>
         <Input placeholder="default" />
        </FormGroup>
        <FormGroup>
          <Input placeholder="sm" bsSize="sm" />
        </FormGroup>
        <FormGroup>
          <Input type="select" bsSize="lg">
            <option>Large Select</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Input type="select">
            <option>Default Select</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Input type="select" bsSize="sm">
            <option>Small Select</option>
          </Input>
        </FormGroup>

      </Form>


                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                    
                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Input Grid Sizing</h2>
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
          <Label for="exampleEmail" sm={2} size="lg">Email</Label>
          <Col sm={12}>
            <Input type="email" name="email" id="exampleEmail" placeholder="lg" bsSize="lg" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail2" sm={12}>Email</Label>
          <Col sm={12}>
            <Input type="email" name="email" id="exampleEmail2" placeholder="default" />
          </Col>
        </FormGroup>
      </Form>

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                    
                    
                    
                    
                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Input Groups</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-8 col-md-9 col-10">



 
<div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Input addon type="checkbox" aria-label="Checkbox for following text input" />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Check it out" />
      </InputGroup>
      <br />
      <InputGroup>
        <Input placeholder="username" />
        <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>$</InputGroupText>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Dolla dolla billz yo!" />
        <InputGroupAddon addonType="append">
          <InputGroupText>$</InputGroupText>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input placeholder="Amount" type="number" step="1" />
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup>
    </div>

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                    
                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Input Group addons</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-8 col-md-9 col-10">


    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>To the Left!</InputGroupText>
        </InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <InputGroupText>To the Right!</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>To the Left!</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="and..." />
        <InputGroupAddon addonType="append">
          <InputGroupText>To the Right!</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                    
                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Addon sizing</h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-8 col-md-9 col-10">


     <div>
      <InputGroup size="lg">
        <InputGroupAddon addonType="prepend">@lg</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">@normal</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">@sm</InputGroupAddon>
        <Input />
      </InputGroup>
    </div>

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>
                    
                    <div class="col-12">
                        <section class="box ">
                            <header class="panel_header">
                                <h2 class="title float-left">Input Group Dropdowns </h2>
                                <div class="actions panel_actions float-right">
                                    <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div class="content-body">
                                <div class="row">
                                    <div class="col-lg-8 col-md-9 col-10">



    
        <div>
        <InputGroup>
          <InputGroupAddon addonType="prepend"><Button>I'm a button</Button></InputGroupAddon>
          <Input />
        </InputGroup>
        <br />
        <InputGroup>
          <Input />
          <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
            <DropdownToggle caret>
              Button Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
            <Button outline>Split Button</Button>
            <DropdownToggle split outline />
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
          <Input placeholder="and..." />
          <InputGroupAddon addonType="append"><Button color="secondary">I'm a button</Button></InputGroupAddon>
        </InputGroup>
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

export default FormElements;

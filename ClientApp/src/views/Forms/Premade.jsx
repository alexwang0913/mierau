import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class FormPremade extends React.Component{
    render(){

        return (
            <div>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>

                    <div class="page-title">
                        <div class="float-left">
                            <h1 class="title">Premade Forms</h1>
                        </div>
                    </div>


                            


                    <div class="row margin-0">
                        <div class="col-12">
                            <section class="box ">
                                <header class="panel_header">
                                    <h2 class="title float-left">Vertical Form</h2>
                                    <div class="actions panel_actions float-right">
                                        <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                    </div>
                                </header>
                                <div class="content-body">
                                    <div class="row">
                                        <div class="col-8">

                                            <form>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputEmail4">Email</label>
                                                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label for="inputPassword4">Password</label>
                                                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputAddress">Address</label>
                                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputAddress2">Address 2</label>
                                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                                                </div>
                                                <div class="form-row">
                                                    <div class="form-group col-md-6">
                                                        <label for="inputCity">City</label>
                                                        <input type="text" class="form-control" id="inputCity"/>
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label for="inputState">State</label>
                                                        <select id="inputState" class="form-control">
                                                            <option selected>Choose...</option>
                                                            <option>...</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-2">
                                                        <label for="inputZip">Zip</label>
                                                        <input type="text" class="form-control" id="inputZip"/>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                                        <label class="form-check-label" for="gridCheck">
                                                            Check me out
                                                        </label>
                                                    </div>
                                                </div>
                                                <button type="submit" class="btn btn-primary">Sign in</button>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </section></div>



                        <div class="col-12">
                            <section class="box ">
                                <header class="panel_header">
                                    <h2 class="title float-left">Horizontal Form</h2>
                                    <div class="actions panel_actions float-right">
                                        <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                    </div>
                                </header>
                                <div class="content-body">
                                    <div class="row">
                                        <div class="col-8">
                                            <form>
                                                <div class="form-group row">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                                                    <div class="col-sm-10">
                                                        <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                                                    <div class="col-sm-10">
                                                        <input type="password" class="form-control" id="inputPassword3" placeholder="Password"/>
                                                    </div>
                                                </div>
                                                <fieldset class="form-group">
                                                    <div class="row">
                                                        <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                                                        <div class="col-sm-10">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                                                <label class="form-check-label" for="gridRadios1">
                                                                    First radio
                                                                </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                                                <label class="form-check-label" for="gridRadios2">
                                                                    Second radio
                                                                </label>
                                                            </div>
                                                            <div class="form-check disabled">
                                                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                                                                <label class="form-check-label" for="gridRadios3">
                                                                    Third disabled radio
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                                <div class="form-group row">
                                                    <div class="col-sm-2">Checkbox</div>
                                                    <div class="col-sm-10">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                                            <label class="form-check-label" for="gridCheck1">
                                                                Example checkbox
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group row">
                                                    <div class="col-sm-10">
                                                        <button type="submit" class="btn btn-primary">Sign in</button>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </section></div>


                        <div class="col-12">
                            <section class="box ">
                                <header class="panel_header">
                                    <h2 class="title float-left">Auto Sizing Form</h2>
                                    <div class="actions panel_actions float-right">
                                        <i class="box_toggle fa fa-chevron-down"></i>
                                    <i class="box_setting fa fa-cog"></i>
                                    <i class="box_close fa fa-times"></i>
                                    </div>
                                </header>
                                <div class="content-body">
                                    <div class="row">
                                        <div class="col-8">
                                            <form>
                                                <div class="form-row align-items-center">
                                                    <div class="col-auto">
                                                        <label class="sr-only" for="inlineFormInput">Name</label>
                                                        <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe" />
                                                    </div>
                                                    <div class="col-auto">
                                                        <label class="sr-only" for="inlineFormInputGroup">Username</label>
                                                        <div class="input-group mb-2">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text">@</div>
                                                            </div>
                                                            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" />
                                                        </div>
                                                    </div>
                                                    <div class="col-auto">
                                                        <div class="form-check mb-2">
                                                            <input class="form-check-input" type="checkbox" id="autoSizingCheck" />
                                                            <label class="form-check-label" for="autoSizingCheck">
                                                                Remember me
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-auto">
                                                        <button type="submit" class="btn btn-primary mb-2">Submit</button>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </section></div>



                        <div class="col-xl-12 col-lg-12 col-12 col-md-12">
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
                                        <div class="col-lg-12 col-md-12 col-12">


                                            <form class="form-inline">
                                                <label class="sr-only" for="inlineFormInputName2">Name</label>
                                                <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe" />

                                                <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
                                                <div class="input-group mb-2 mr-sm-2">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">@</div>
                                                    </div>
                                                    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" />
                                                </div>

                                                <div class="form-check mb-2 mr-sm-2">
                                                    <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
                                                    <label class="form-check-label" for="inlineFormCheck">
                                                        Remember me
                                                    </label>
                                                </div>

                                                <button type="submit" class="btn btn-primary mb-2">Submit</button>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </section></div>



                    </div>






                                
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default FormPremade;

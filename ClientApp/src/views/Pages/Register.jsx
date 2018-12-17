import React from 'react';
import {
    Row, Col,
} from 'reactstrap';

import {
    
} from 'components';

class Register extends React.Component{
   
    
    render(){

        return (
            <div>
                <div className="">
                    <Row>
                        <Col xs={12} md={12}>


        <div class="container-fluid">
            <div class="register-wrapper row">
                <div id="register" class="login loginpage offset-xl-4 offset-lg-3 offset-md-3 offset-0 col-12 col-md-6 col-xl-4">
                    <h1><a href="#!" title="Login Page" tabindex="-1">Complete Admin</a></h1>

                    <form name="loginform" id="loginform" action="#!" method="post">
                        <p>
                            <label for="user_login">Full Name<br />
                                <input type="text" name="log" id="user_login" class="input" value="" size="20" /></label>
                        </p>
                        <p>
                            <label for="user_login2">Email<br />
                                <input type="text" name="log" id="user_login2" class="input" value="" size="20" /></label>
                        </p>
                        <p>
                            <label for="user_login3">Username<br />
                                <input type="text" name="log" id="user_login3" class="input" value="" size="20" /></label>
                        </p>
                        <p>
                            <label for="user_pass">Password<br />
                                <input type="password" name="pwd" id="user_pass" class="input" value="" size="20" /></label>
                        </p>
                        <p>
                            <label for="user_pass2">Confirm Password<br />
                                <input type="password" name="pwd1" id="user_pass2" class="input" value="" size="20" /></label>
                        </p>
                        <p class="forgetmenot">
                            <label class="icheck-label form-label" for="rememberme"><input name="rememberme" type="checkbox" id="rememberme" value="forever" class="icheck-minimal-aero" checked /> I agree to terms to conditions</label>
                        </p>



                        <p class="submit">
                            <input type="button" name="wp-submit" id="wp-submit" class="btn btn-accent btn-block" value="Sign Up" />
                        </p>
                    </form>

                    <p id="nav">
                        <a class="float-left" href="#!" title="Password Lost and Found">Forgot password?</a>
                        <a class="float-right" href="#!" title="Sign Up">Sign In</a>
                    </p>
                    <div class="clearfix"></div>
                    <div class="text-center register-social">

                        <a href="#!" class="btn btn-primary btn-lg facebook"><i class="fa fa-facebook icon-sm"></i></a>
                        <a href="#!" class="btn btn-primary btn-lg twitter"><i class="fa fa-twitter icon-sm"></i></a>
                        <a href="#!" class="btn btn-primary btn-lg google-plus"><i class="fa fa-google-plus icon-sm"></i></a>
                        <a href="#!" class="btn btn-primary btn-lg dribbble"><i class="fa fa-dribbble icon-sm"></i></a>

                    </div>

                </div>
            </div>


        </div>






                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default Register;

import React from "react";
import { Row, Col } from "reactstrap";

import {} from "components";

import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      toDashboard: false
    };
  }

  login = () => {
    this.setState({
      toDashboard: true
    });
  };

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/home" />;
    }

    return (
      <div>
        <div className="">
          <Row>
            <Col xs={12} md={12}>
              <div className="container-fluid">
                <div className="login-wrapper row">
                  <div
                    id="login"
                    className="login loginpage offset-xl-4 offset-lg-3 offset-md-3 offset-0 col-12 col-md-6 col-xl-4"
                    style={{
                      border: "1px solid #3f5185",
                      "border-radius": "10px"
                    }}
                  >
                    {/* <h1><a href="#!" title="Login Page" tabIndex="-1">Complete Admin</a></h1> */}
                    <div className="text-center mt-2">
                      <img src="mierau_logo.png" />
                      <p className="text-primary" style={{"font-size": "15px"}}>
                        <i>"construction excellent through working together"</i>
                      </p>
                    </div>

                    <form
                      name="loginform"
                      id="loginform"
                      action="#!"
                      method="post"
                    >
                      <p>
                        <label for="user_login" className="text-primary">
                          Username
                          <br />
                          <input
                            type="text"
                            name="log"
                            id="user_login"
                            className="input"
                            value="test"
                            size="20"
                          />
                        </label>
                      </p>
                      <p>
                        <label for="user_pass" className="text-primary">
                          Password
                          <br />
                          <input
                            type="password"
                            name="pwd"
                            id="user_pass"
                            className="input"
                            value="demo"
                            size="20"
                          />
                        </label>
                      </p>
                      <p className="forgetmenot">
                        <label
                          className="icheck-label form-label text-primary"
                          for="rememberme"
                        >
                          <input
                            name="rememberme"
                            type="checkbox"
                            id="rememberme"
                            value="forever"
                            className="icheck-minimal-aero"
                            checked
                          />{" "}
                          Remember me
                        </label>
                      </p>

                      <p className="submit">
                        <input
                          type="button"
                          name="wp-submit"
                          id="wp-submit"
                          className="btn btn-accent btn-block"
                          value="Sign In"
                          onClick={this.login}
                        />
                      </p>
                    </form>

                    {/* <p id="nav">
                      <a
                        className="float-left"
                        href="#!"
                        title="Password Lost and Found"
                      >
                        Forgot password?
                      </a>
                      <a className="float-right" href="#!" title="Sign Up">
                        Sign Up
                      </a>
                    </p> */}
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

export default Login;

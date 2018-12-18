import React from "react";
import { Row, Col } from "reactstrap";

import {} from "components";

import logo from "assets/img/mierau_logo.png";

class Login extends React.Component {
  onClickLogin() {}
  render() {
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
                  >
                    <center>
                      <h1>
                        {/* <a href="#!" title="Login Page" tabIndex="-1" /> */}
                        <img src={logo} />
                      </h1>
                    </center>

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
                            value="demo"
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
                          className="icheck-label form-label"
                          for="rememberme"
                          className="text-primary"
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
                        <a
                          id="wp-submit"
                          className="btn btn-accent btn-block"
                          href="/dashboard"
                          onClick={this.onClickLogin}
                        >
                          Sign In
                        </a>
                      </p>
                    </form>
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

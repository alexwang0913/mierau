import React from "react";
import { Row, Col } from "reactstrap";

import {} from "components";

import logo from "assets/img/mierau_logo.png";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: ""
    }
    this.onClickLogin = this.onClickLogin.bind(this);
  }
  updateState(name, e) {
    this.setState({ [name]: e.target.value });
  }
  onClickLogin(event) {
    let data = {
      userName: this.state.userName,
      password: this.state.password
    }


    fetch('api/User/Login', {
      method: 'POST',
      body: data
    })
    .then(response => {
      console.log(response);
    })
  }
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
                    <center>
                      <i style={{color: "blue", fontSize: "15px"}}>
                        "construction excellence through working together"
                      </i>
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
                            value={this.state.userName}
                            onChange={e => this.updateState("userName", e)}
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
                            value={this.state.password}
                              onChange={e => this.updateState("password", e)}
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

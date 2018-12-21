import { Row, Col, Input, span, FormGroup } from "reactstrap";
import React from "react";
import {} from "components";

import logofull from "assets/img/logo-full.png";
import { NavLink } from "react-router-dom";

import Cookies from "universal-cookie";
const cookies = new Cookies();

class CompanyInformation extends React.Component {
  constructor() {
    super();
    this.state = {
      companyName: "",
      country: -1,
      timeZone: -1,
      language: -1,
      systemName: "",
      systemTitle: "",

      countries: [],
      timeZones: [],
      languages: []
    };

    this.updateCompanyInformation = this.updateCompanyInformation.bind(this);
  }

  componentDidMount() {
    const self = this;
    const companyId = cookies.get("user").companyId;
    
    fetch("api/Company/GetCountries")
      .then(response => response.json())
      .then(data => {
        self.setState({ countries: data });
      });

    fetch("api/company/" + companyId)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        self.setState({ companyName: data.companyName });
        self.setState({ systemName: data.systemName });
        self.setState({ systemTitle: data.systemTitle });
        self.setState({ country: data.countryId });
        self.setState({ timeZone: data.timezoneId });
        self.setState({ language: data.languageId });
      });

    fetch("api/TimeZone")
      .then(response => response.json())
      .then(data => {
        self.setState({ timeZones: data });
      });

    fetch("api/Language")
      .then(response => response.json())
      .then(data => {
        self.setState({ languages: data });
      });
  }
  updateState(name, e) {
    this.setState({ [name]: e.target.value });
  }
  updateCompanyInformation() {
    const updateInfo = {
      companyName: this.state.companyName,
      timezoneId: this.state.timeZone,
      countryId: this.state.country,
      systemName: this.state.systemName,
      systemTitle: this.state.systemTitle,
      languageId: this.state.language,
      companyId: cookies.get("user").companyId
    };

    fetch("api/company/UpdateCompanyInformation", {
      method: "post",
      body: JSON.stringify(updateInfo),
      headers: {
        "Content-Type": "application/json;"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }
  render() {
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div class="page-title">
                <div class="float-left">
                  <h1 class="title">Company Information</h1>
                </div>
              </div>
              <section class="box ">
                <div class="content-body">
                  <div className="row mt-2">
                    <div className="col-md-3 col-4 text-right">
                      <span>Company Name:</span>
                    </div>
                    <div className="col-md-9 col-8">
                      <Input
                        type="text"
                        value={this.state.companyName}
                        onChange={e => this.updateState("companyName", e)}
                      />
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-md-3 col-4 text-right">
                      <span>Country:</span>
                    </div>
                    <div className="col-md-9 col-8">
                      <FormGroup>
                        <Input
                          type="select"
                          name="select"
                          value={this.state.country}
                          onChange={e => this.updateState("country", e)}
                        >
                          <option value="-1">Select Country</option>
                          {this.state.countries.map(country => {
                            return (
                              <option value={country.id}>{country.name}</option>
                            );
                          })}
                        </Input>
                      </FormGroup>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3 col-4 text-right">
                      <span>TimeZone:</span>
                    </div>
                    <div className="col-md-9 col-8">
                      <FormGroup>
                        <Input
                          type="select"
                          name="select"
                          value={this.state.timeZone}
                          onChange={e => this.updateState("timeZone", e)}
                        >
                          <option value="-1">Select TimeZone</option>
                          {this.state.timeZones.map(timeZone => {
                            return (
                              <option value={timeZone.id}>
                                {timeZone.description}
                              </option>
                            );
                          })}
                        </Input>
                      </FormGroup>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3 col-4 text-right">
                      <span>Language:</span>
                    </div>
                    <div className="col-md-9 col-8">
                      <FormGroup>
                        <Input
                          type="select"
                          name="select"
                          value={this.state.language}
                          onChange={e => this.updateState("language", e)}
                        >
                          <option value="-1">Select Language</option>
                          {this.state.languages.map(language => {
                            return (
                              <option value={language.id}>
                                {language.name}
                              </option>
                            );
                          })}
                        </Input>
                      </FormGroup>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3 col-4 text-right">
                      <span>System Name:</span>
                    </div>
                    <div className="col-md-9 col-8">
                      <Input
                        type="text"
                        value={this.state.systemName}
                        onChange={e => this.updateState("systemName", e)}
                      />
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col-md-3 col-4 text-right">
                      <span>System Title:</span>
                    </div>
                    <div className="col-md-9 col-8">
                      <Input
                        type="text"
                        value={this.state.systemTitle}
                        onChange={e => this.updateState("systemTitle", e)}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <hr />
                  </div>
                  <div className="row mt-2">
                    <NavLink to="setup-companyDetail">
                      <button
                        className="btn btn-primary"
                        onClick={this.updateCompanyInformation}
                      >
                        Update
                      </button>
                    </NavLink>

                    <NavLink to="setup-companyDetail">
                      <button className="btn ml-2">Close</button>
                    </NavLink>
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default CompanyInformation;

import { Row, Col, Input, span, FormGroup } from "reactstrap";
import React from "react";
import { } from "components";

import logofull from "assets/img/logo-full.png";
import { NavLink } from "react-router-dom";

import Cookies from "universal-cookie";
const cookies = new Cookies();

class ThemeItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div
          className="ml-2"
          style={{
            height: "40px",
            width: "40px",
            backgroundColor: this.props.color,
            borderTopRightRadius: "50%",
            borderTopLeftRadius: "50%",
            borderBottomRightRadius: "50%",
            borderBottomLeftRadius: "50%",
            border: this.props.select == "true" ? "5px solid #eaeaea" : ""
          }}
        />
      </div>
    );
  }
}

class CompanyDetail extends React.Component {
  constructor() {
    super();

    this.state = {
      editCompanyInfo: false,
      editPrsCode: false,
      editInsuranceDetail: false,
      editTaxNumber: false,

      // for company information
      companyName: "",
      address1: "201 - 30444 Great Northern Ave",
      address2: "",
      city: "Abbostsford",
      province: "BC",
      country: "",
      postalCode: "V2T 6Y6",
      timeZone: -1, //"(GMT - 08:00) Pacific Standard Time",
      phone: "(604) 850-3536",
      fax: "(604) 857-9790",
      tradeGroup: "Mierau Lower Mainland",
      mainContact: "Kevin Mierau",
      companyEmail: "information.abbotrsford@mierau.net",
      bidEmail: "information.abbotsford@mierau.net",
      systemName: "",
      systemTitle: "",
      language: "", //"English (united States)",
      countries: [],

      //corporate details
      legalName: "*legal Name",
      taxRegistration: "*tax Registration",

      // for prs codes
      apAcctid: "12541",
      arAcctId: "12541",

      // insurance detail
      wcbNumber: "873152755",
      wcbPaidToDate: "12345",

      // tax number
      gstNumber: "873152755",
      pstNumber: "12345",

      // for color
      themeColor: "#3f51b5",

      // for address
      billingAddress: "1233 12 st Unit23 Abbotsford, BC V5Y 1H4"
    };

    this.updateCompanyInformation = this.updateCompanyInformation.bind(this);
    this.cancelCompanyInformation = this.cancelCompanyInformation.bind(this);
  }
  componentDidMount() {
    const self = this;
    fetch("api/Company/GetCountries")
      .then(response => response.json())
      .then(data => {
        self.setState({ countries: data });
        self.state.countries = data;
      });
    const companyId = cookies.get("user").companyId;

    let tradeGroups = [];
    fetch("api/company/" + companyId)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        self.setState({ companyName: data.companyName });
        self.setState({ systemName: data.systemName });
        self.setState({ systemTitle: data.systemTitle });
        self.setState({ country: data.countryName });
        self.setState({ timeZone: data.timeZoneName });
        self.setState({ language: data.languageName });
        tradeGroups = data.tradeGroups;
        console.log(tradeGroups);
      });
    setTimeout(() => {
      const _self = self;
      fetch("api/tradeGroup")
        .then(response => response.json())
        .then(data => {
          let _tradeGroup = "";
          tradeGroups.map((tradeGroup, index) => {
            data.map(tradeGroup_server => {
              if (tradeGroup_server.id == tradeGroup.id) {
                _tradeGroup += tradeGroup_server.name;
              }
            })
            if (index < tradeGroups.length - 1) {
              _tradeGroup += ",";
            }
          });
          _self.setState({ tradeGroup: _tradeGroup });
        })
    }, 100);
  }
  updateState(name, e) {
    this.setState({ [name]: e.target.value });
  }
  updateCompanyInformation() {
    this.setState({
      editCompanyInfo: false
    });
  }
  cancelCompanyInformation() {
    this.setState({
      editCompanyInfo: false
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
                  <h1 class="title">Company Details</h1>
                </div>
              </div>
              <section class="box ">
                <div class="content-body company_detail">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <h2
                        style={{
                          fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                          fontSize: "15px",

                          color: "#676767",
                          fontWeight: "800",
                          display: "inline-block"
                        }}
                      >
                        Company Information
                      </h2>
                      {/* <div className="col-12">
                      <hr />
                    </div> */}

                      <div className="row">
                        <span className="col-md-3 col-5  text-left">
                          Company Name:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <Input
                              type="text"
                              value={this.state.companyName}
                              onChange={e => this.updateState("companyName", e)}
                            />
                          ) : (
                              <span>{this.state.companyName}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Country:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <FormGroup>
                              <Input
                                type="select"
                                name="select"
                                value={this.state.selectCountry}
                                onChange={e =>
                                  this.updateState("selectCountry", e)
                                }
                              >
                                <option value="-1">Select Country</option>
                                {this.state.countries.map(country => {
                                  return (
                                    <option value={country.id}>
                                      {country.name}
                                    </option>
                                  );
                                })}
                              </Input>
                            </FormGroup>
                          ) : (
                              <span>{this.state.country}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Time Zone:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <FormGroup>
                              <Input
                                type="select"
                                name="select"
                                value={this.state.timeZone}
                                onChange={e => this.updateState("timeZone", e)}
                              >
                                <option value="timeZone">timeZone</option>
                                <option value="timeZone2">timeZone2</option>
                              </Input>
                            </FormGroup>
                          ) : (
                              <span>{this.state.timeZone}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Language:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <FormGroup>
                              <Input
                                type="select"
                                name="select"
                                value={this.state.language}
                                onChange={e => this.updateState("language", e)}
                              >
                                <option value="timeZone">timeZone</option>
                                <option value="timeZone2">timeZone2</option>
                              </Input>
                            </FormGroup>
                          ) : (
                              <span>{this.state.language}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          System Name:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <Input
                              type="text"
                              value={this.state.systemName}
                              onChange={e => this.updateState("systemName", e)}
                            />
                          ) : (
                              <span>{this.state.systemName}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          System Title:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <Input
                              type="text"
                              value={this.state.systemTitle}
                              onChange={e => this.updateState("systemTitle", e)}
                            />
                          ) : (
                              <span>{this.state.systemTitle}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Trade Group:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <FormGroup>
                              <Input
                                type="select"
                                name="select"
                                value={this.state.tradeGroup}
                                onChange={e =>
                                  this.updateState("tradeGroup", e)
                                }
                              >
                                <option value="tradeGroup">tradeGroup</option>
                                <option value="tradeGroup2">tradeGroup2</option>
                              </Input>
                            </FormGroup>
                          ) : (
                              <span>{this.state.tradeGroup}</span>
                            )}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12 text-right">
                          {this.state.editCompanyInfo === true ? (
                            <div>
                              <button
                                className="btn btn-primary"
                                onClick={this.updateCompanyInformation}
                              >
                                Update
                              </button>
                              <button
                                className="btn ml-2"
                                onClick={this.cancelCompanyInformation}
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                              <NavLink to="/setup-companyInformation">
                                <button className="btn btn-link btn-sm">
                                  Edit
                              </button>
                              </NavLink>
                            )}
                        </div>
                      </div>

                      <h2
                        style={{
                          fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                          fontSize: "15px",

                          color: "#676767",
                          fontWeight: "800",
                          display: "inline-block"
                        }}
                      >
                        Theme
                      </h2>

                      <div className="row" style={{ marginLeft: "10px" }}>
                        <div
                          onClick={() => {
                            this.setState({ themeColor: "#000" });
                          }}
                        >
                          <ThemeItem color="#000" />
                        </div>
                        <div
                          onClick={() => {
                            this.setState({ themeColor: "#a1a1a1" });
                          }}
                        >
                          <ThemeItem color="#a1a1a1" />
                        </div>
                        <div
                          onClick={() => {
                            this.setState({ themeColor: "#d6c2c3" });
                          }}
                        >
                          <ThemeItem color="#d6c2c3" />
                        </div>
                        <div
                          onClick={() => {
                            this.setState({ themeColor: "#c592c5" });
                          }}
                        >
                          <ThemeItem color="#c592c5" />
                        </div>
                        <div
                          onClick={() => {
                            this.setState({ themeColor: "#d9818e" });
                          }}
                        >
                          <ThemeItem color="#d9818e" />
                        </div>
                        <div
                          onClick={() => {
                            this.setState({ themeColor: "#888" });
                          }}
                        >
                          <ThemeItem color="#888" />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12 text-right">
                          <button className="btn btn-link btn-sm">Edit</button>
                        </div>
                      </div>

                      <h2
                        style={{
                          fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                          fontSize: "15px",

                          color: "#676767",
                          fontWeight: "800",
                          display: "inline-block"
                        }}
                      >
                        Addresses
                      </h2>
                      <div className="row">
                        <span className="col-md-3 col-5  text-left">
                          Billing Address:
                        </span>
                        <br />
                        <div className="col-md-10 col-12 mt-2">
                          {this.state.editCompanyInfo ? (
                            <Input
                              type="text"
                              value={this.state.billingAddress}
                              onChange={e =>
                                this.updateState("billingAddress", e)
                              }
                            />
                          ) : (
                              // <span>{this.state.billingAddress}</span>
                              <div>
                                <span>1233 12 st Unit23</span>
                                <br />
                                <span>Abbotsford, BC V5Y 1H4</span>
                              </div>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Legal Address:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <Input
                              type="text"
                              value={this.state.legalAddress}
                              onChange={e =>
                                this.updateState("legalAddress", e)
                              }
                            />
                          ) : (
                              <span>{this.state.legalAddress}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Office Address:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <Input
                              type="text"
                              value={this.state.officeAddress}
                              onChange={e =>
                                this.updateState("officeAddress", e)
                              }
                            />
                          ) : (
                              <span>{this.state.officeAddress}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Shipping Address:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <Input
                              type="text"
                              value={this.state.shippingAddress}
                              onChange={e =>
                                this.updateState("shippingAddress", e)
                              }
                            />
                          ) : (
                              <span>{this.state.shippingAddress}</span>
                            )}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12 text-right">
                          <button className="btn btn-link btn-sm">Edit</button>
                        </div>
                      </div>

                      <h2
                        style={{
                          fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                          fontSize: "15px",

                          color: "#676767",
                          fontWeight: "800",
                          display: "inline-block"
                        }}
                      >
                        PRS Codes
                      </h2>

                      <div className="row">
                        <span className="col-md-3 col-5  text-left">
                          AP Acct ID:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editPrsCode ? (
                            <Input
                              type="text"
                              value={this.state.apAcctid}
                              onChange={e => this.updateState("apAcctid", e)}
                            />
                          ) : (
                              <span>{this.state.apAcctid}</span>
                            )}
                        </div>
                      </div>

                      <div className="row">
                        <span className="col-md-3 col-5  text-left">
                          AR Acct ID:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editPrsCode ? (
                            <Input
                              type="text"
                              value={this.state.arAcctId}
                              onChange={e => this.updateState("arAcctId", e)}
                            />
                          ) : (
                              <span>{this.state.arAcctId}</span>
                            )}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12 text-right">
                          <button className="btn btn-link btn-sm">Edit</button>
                        </div>
                      </div>

                      <h2
                        style={{
                          fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                          fontSize: "15px",

                          color: "#676767",
                          fontWeight: "800",
                          display: "inline-block"
                        }}
                      >
                        System Logo
                      </h2>
                      <div className="row" style={{ marginLeft: "20px" }}>
                        <img src={logofull} />
                      </div>

                      <div className="row">
                        <div className="col-12 text-right">
                          <button className="btn btn-link btn-sm">Edit</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <h2
                        style={{
                          fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                          fontSize: "15px",

                          color: "#676767",
                          fontWeight: "800",
                          display: "inline-block"
                        }}
                      >
                        Corporate Details
                      </h2>

                      <div className="row">
                        <span className="col-md-3 col-5  text-left">
                          Legal Name:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <Input
                              type="text"
                              value={this.state.legalName}
                              onChange={e => this.updateState("legalName", e)}
                            />
                          ) : (
                              <span>{this.state.legalName}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Tax Registration:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <Input
                              type="text"
                              value={this.state.taxRegistration}
                              onChange={e =>
                                this.updateState("taxRegistration", e)
                              }
                            />
                          ) : (
                              <span>{this.state.taxRegistration}</span>
                            )}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12 text-right">
                          <button className="btn btn-link btn-sm">Edit</button>
                        </div>
                      </div>

                      <h2
                        style={{
                          fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                          fontSize: "15px",

                          color: "#676767",
                          fontWeight: "800",
                          display: "inline-block"
                        }}
                      >
                        Office Contact Details
                      </h2>

                      {/* <div className="row">
                        <span className="col-md-3 col-5  text-left">
                          Main Contact:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <FormGroup>
                              <Input
                                type="select"
                                name="select"
                                value={this.state.mainContact}
                                onChange={e =>
                                  this.updateState("mainContact", e)
                                }
                              >
                                <option value="mainContact">mainContact</option>
                                <option value="mainContact2">
                                  mainContact2
                                </option>
                              </Input>
                            </FormGroup>
                          ) : (
                            <span>{this.state.mainContact}</span>
                          )}
                        </div>
                      </div> */}

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Phone:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <Input
                              type="text"
                              value={this.state.phone}
                              onChange={e => this.updateState("phone", e)}
                            />
                          ) : (
                              <span>{this.state.phone}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Phone2:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <Input
                              type="text"
                              value={this.state.phone2}
                              onChange={e => this.updateState("phone2", e)}
                            />
                          ) : (
                              <span>{this.state.phone2}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">Fax:</span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <Input
                              type="text"
                              value={this.state.fax}
                              onChange={e => this.updateState("fax", e)}
                            />
                          ) : (
                              <span>{this.state.fax}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Website:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <Input
                              type="text"
                              value={this.state.website}
                              onChange={e => this.updateState("website", e)}
                            />
                          ) : (
                              <span>{this.state.website}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Twitter:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <Input
                              type="text"
                              value={this.state.twitter}
                              onChange={e => this.updateState("twitter", e)}
                            />
                          ) : (
                              <span>{this.state.twitter}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Facebook:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <Input
                              type="text"
                              value={this.state.faceBook}
                              onChange={e => this.updateState("faceBook", e)}
                            />
                          ) : (
                              <span>{this.state.faceBook}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          LinkedIn:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <Input
                              type="text"
                              value={this.state.linkedId}
                              onChange={e => this.updateState("linkedId", e)}
                            />
                          ) : (
                              <span>{this.state.linkedId}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Email:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editCompanyInfo ? (
                            <Input
                              type="text"
                              value={this.state.companyEmail}
                              onChange={e =>
                                this.updateState("companyEmail", e)
                              }
                            />
                          ) : (
                              <span>{this.state.companyEmail}</span>
                            )}
                        </div>
                      </div>

                      {/* <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Bid Emails:
                        </span>
                        <div className="col-md-9 col-12 text-left">
                          {this.state.editCompanyInfo ? (
                            <Input
                              type="text"
                              value={this.state.bidEmail}
                              onChange={e => this.updateState("bidEmail", e)}
                            />
                          ) : (
                            <span>{this.state.bidEmail}</span>
                          )}
                        </div>
                      </div> */}

                      <div className="row">
                        <div className="col-12 text-right">
                          <button className="btn btn-link btn-sm">Edit</button>
                        </div>
                      </div>

                      <h2
                        style={{
                          fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                          fontSize: "15px",

                          color: "#676767",
                          fontWeight: "800",
                          display: "inline-block"
                        }}
                      >
                        Primary Contact Details
                      </h2>

                      <div className="row">
                        <span className="col-md-3 col-5  text-left">
                          First Name:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editInsuranceDetail ? (
                            <Input
                              type="text"
                              value={this.state.firstName}
                              onChange={e => this.updateState("firstName", e)}
                            />
                          ) : (
                              <span>{this.state.firstName}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Last Name:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editInsuranceDetail ? (
                            <Input
                              type="text"
                              value={this.state.lastName}
                              onChange={e => this.updateState("lastName", e)}
                            />
                          ) : (
                              <span>{this.state.lastName}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Title:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editInsuranceDetail ? (
                            <Input
                              type="text"
                              value={this.state.title}
                              onChange={e => this.updateState("title", e)}
                            />
                          ) : (
                              <span>{this.state.title}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Direct Phone:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editInsuranceDetail ? (
                            <Input
                              type="text"
                              value={this.state.directPhone}
                              onChange={e => this.updateState("directPhone", e)}
                            />
                          ) : (
                              <span>{this.state.directPhone}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Mobile:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editInsuranceDetail ? (
                            <Input
                              type="text"
                              value={this.state.mobile}
                              onChange={e => this.updateState("mobile", e)}
                            />
                          ) : (
                              <span>{this.state.mobile}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Direct Fax:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editInsuranceDetail ? (
                            <Input
                              type="text"
                              value={this.state.directFax}
                              onChange={e => this.updateState("directFax", e)}
                            />
                          ) : (
                              <span>{this.state.directFax}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Email:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editInsuranceDetail ? (
                            <Input
                              type="text"
                              value={this.state.email}
                              onChange={e => this.updateState("email", e)}
                            />
                          ) : (
                              <span>{this.state.email}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          Skype Id:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editInsuranceDetail ? (
                            <Input
                              type="text"
                              value={this.state.skypeId}
                              onChange={e => this.updateState("skypeId", e)}
                            />
                          ) : (
                              <span>{this.state.skypeId}</span>
                            )}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12 text-right">
                          <button className="btn btn-link btn-sm">Edit</button>
                        </div>
                      </div>

                      <h2
                        style={{
                          fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                          fontSize: "15px",

                          color: "#676767",
                          fontWeight: "800",
                          display: "inline-block"
                        }}
                      >
                        Insurance Details
                      </h2>

                      <div className="row">
                        <span className="col-md-3 col-5  text-left">
                          WCB Number:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editInsuranceDetail ? (
                            <Input
                              type="text"
                              value={this.state.wcbNumber}
                              onChange={e => this.updateState("wcbNumber", e)}
                            />
                          ) : (
                              <span>{this.state.wcbNumber}</span>
                            )}
                        </div>
                      </div>

                      <div className="row mt-2">
                        <span className="col-md-3 col-5  text-left">
                          WCB Paid to Date:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editInsuranceDetail ? (
                            <Input
                              type="text"
                              value={this.state.wcbPaidToDate}
                              onChange={e =>
                                this.updateState("wcbPaidToDate", e)
                              }
                            />
                          ) : (
                              <span>{this.state.wcbPaidToDate}</span>
                            )}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12 text-right">
                          <button className="btn btn-link btn-sm">Edit</button>
                        </div>
                      </div>

                      <h2
                        style={{
                          fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                          fontSize: "15px",

                          color: "#676767",
                          fontWeight: "800",
                          display: "inline-block"
                        }}
                      >
                        Tax Numbers
                      </h2>

                      <div className="row">
                        <span className="col-md-3 col-5  text-left">
                          GST Number:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editTaxNumber ? (
                            <Input
                              type="text"
                              value={this.state.gstNumber}
                              onChange={e => this.updateState("gstNumber", e)}
                            />
                          ) : (
                              <span>{this.state.gstNumber}</span>
                            )}
                        </div>
                      </div>

                      <div className="row">
                        <span className="col-md-3 col-5  text-left">
                          PST Number:
                        </span>
                        <div className="col-md-9 col-7">
                          {this.state.editTaxNumber ? (
                            <Input
                              type="text"
                              value={this.state.pstNumber}
                              onChange={e => this.updateState("pstNumber", e)}
                            />
                          ) : (
                              <span>{this.state.pstNumber}</span>
                            )}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12 text-right">
                          <button className="btn btn-link btn-sm">Edit</button>
                        </div>
                      </div>

                      <h2
                        style={{
                          fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                          fontSize: "15px",

                          color: "#676767",
                          fontWeight: "800",
                          display: "inline-block"
                        }}
                      >
                        Others
                      </h2>

                      <div className="row">
                        <span className="col-md-3 col-5  text-left">Note:</span>
                        <div className="col-md-9 col-7">
                          {this.state.editTaxNumber ? (
                            <Input
                              type="text"
                              value={this.state.note}
                              onChange={e => this.updateState("note", e)}
                            />
                          ) : (
                              <span>{this.state.note}</span>
                            )}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12 text-right">
                          <button className="btn btn-link btn-sm">Edit</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-12">
                      <NavLink to="/setup">
                        <button className="btn ml-2">Close</button>
                      </NavLink>
                    </div>
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

export default CompanyDetail;

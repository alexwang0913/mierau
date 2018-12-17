import React from "react";
import { Row, Col } from "reactstrap";

import {} from "components";

class SetupItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <i
            className={
              "float-right fa fa-" + this.props.icon + " icon-md col-2"
            }
            style={{ "margin-top": "20px", textAlign: "right" }}
          />
          <div style={{ "padding-left": "20px" }} className="col-10">
            <h6>
              <a href={this.props.link}>
                <strong>{this.props.title}</strong>
              </a>
            </h6>
            <span>{this.props.description}</span>
          </div>
        </div>
      </div>
    );
  }
}

class Setup extends React.Component {
  render() {
    return (
      <div>
        <div className="content">
          <div class="page-title">
            <div class="float-left">
              <h1 class="title">SETUP</h1>
            </div>
          </div>

          <div class="col-12">
            <section class="box ">
              <header class="panel_header">
                <h2 class="title float-left col-6">Company Details</h2>
                <h2
                  class="title float-left col-6"
                  style={{ "padding-left": "10px" }}
                >
                  Add New User
                </h2>
              </header>
              <div class="content-body">
                <div class="row">
                  <div className="col-6">
                    <SetupItem
                      icon="briefcase"
                      title="Company Details"
                      link="/home"
                      description="Manage your coporate information like Contact details,
                          System logos, time Zone and other."
                    />
                    <SetupItem
                      icon="group"
                      title="Marketing Campaigns"
                      link="#"
                      description="Manage Marketing Campaigns and Promotions."
                    />
                  </div>
                  <div className="col-6">
                    <SetupItem
                      icon="briefcase"
                      title="Add New User"
                      link="#"
                      description="Create new corporate and Business Unit uses within the system."
                    />
                    <h2
                      style={{
                        fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                        fontSize: "19px",
                        paddingLeft: "10px",
                        paddingTop: "15px",
                        lineHeight: "30px",
                        color: "#676767",
                        fontWeight: "400",
                        display: "inline-block"
                      }}
                    >
                      Manage Users
                    </h2>
                    <SetupItem
                      icon="group"
                      title="All User"
                      link="#"
                      description="Manage all user profiles, security permissions and other information"
                    />
                    <SetupItem
                      icon="group"
                      title="System Administrators"
                      link="#"
                      description="Manage system administrator profiles, login credentials, security permission."
                    />
                    <SetupItem
                      icon="group"
                      title="Call Center Users"
                      link="#"
                      description="Manage call center user profiles, login credentials, security permission."
                    />
                    <SetupItem
                      icon="group"
                      title="Business Unit Users"
                      link="#"
                      description="Manage Busuniess Unit users profiles, login credentials, security persmission."
                    />
                    <SetupItem
                      icon="user"
                      title="User Login History"
                      link="#"
                      description="View User login history."
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Setup;

import React from "react";
import { Row, Col } from "reactstrap";

import {} from "components";

import { Line, Bar, Doughnut, Radar, Scatter } from "react-chartjs-2";

//import styles from 'jvectormap/jquery-jvectormap.css'
import { VectorMap } from "react-jvectormap";

class Dashboard extends React.Component {
  render() {
    const data1 = {
      labels: ["Firefox", "Chrome", "Edge", "Opera", "IE"],
      datasets: [
        {
          data: [300, 50, 100, 75, 10],
          backgroundColor: [
            "#3F51B5",
            "#303F9F",
            "#1A237E",
            "#9FA8DA",
            "#7986CB",
            "#C5CAE9"
          ],
          hoverBackgroundColor: [
            "#3F51B5",
            "#303F9F",
            "#1A237E",
            "#9FA8DA",
            "#7986CB",
            "#C5CAE9"
          ]
        }
      ]
    };

    const options1 = {
      legend: {
        display: false
      }
    };

    const data2 = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      datasets: [
        {
          label: "Users",
          backgroundColor: "rgba(233, 30, 99,1)",
          borderColor: "rgba(233, 30, 99,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(233, 30, 99,0.8)",
          hoverBorderColor: "rgba(233, 30, 99,1)",
          data: [65, 59, 80, 81, 56, 55, 60, 53, 58]
        }
      ]
    };

    const options2 = {
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)"
            },
            ticks: {
              display: false
            }
          }
        ]
      },
      maintainAspectRatio: false
    };

    const data3 = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      datasets: [
        {
          label: "Visits",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgba(63, 81, 181,1)",
          borderColor: "rgba(63, 81, 181,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(63, 81, 181,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(63, 81, 181,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40, 71, 66]
        }
      ]
    };

    const options3 = {
      bezierCurve: true,
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)"
            },
            ticks: {
              display: false
            }
          }
        ]
      },
      maintainAspectRatio: false
    };

    const data4 = {
      labels: ["Scatter"],
      datasets: [
        {
          label: "Users New / Visitors",
          fill: true,
          backgroundColor: "rgba(233, 30, 99,0.4)",
          pointBorderColor: "rgba(233, 30, 99,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 4,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: "rgba233, 30, 99,1)",
          pointHoverBorderColor: "rgba(233, 30, 99,1)",
          pointHoverBorderWidth: 7,
          pointRadius: 4,
          pointHitRadius: 5,
          data: [
            { x: 65, y: 75 },
            { x: 59, y: 49 },
            { x: 80, y: 90 },
            { x: 81, y: 29 },
            { x: 56, y: 36 },
            { x: 55, y: 25 },
            { x: 40, y: 78 },
            { x: 75, y: 55 },
            { x: 49, y: 39 },
            { x: 60, y: 40 },
            { x: 71, y: 59 },
            { x: 86, y: 36 },
            { x: 35, y: 55 },
            { x: 50, y: 68 },
            { x: 55, y: 45 },
            { x: 69, y: 59 },
            { x: 70, y: 40 },
            { x: 51, y: 59 },
            { x: 46, y: 66 }
          ]
        }
      ]
    };

    const options4 = {
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
              color: "rgba(33, 33, 33, 0)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)"
            },
            ticks: {
              beginAtZero: true,
              display: false
            }
          }
        ]
      },
      maintainAspectRatio: false
    };

    const data5 = {
      labels: [
        "0h",
        "2h",
        "4h",
        "6h",
        "8h",
        "10h",
        "12h",
        "14h",
        "16h",
        "18h",
        "20h",
        "22h",
        "24h"
      ],
      datasets: [
        {
          label: "Users",
          backgroundColor: "rgba(63, 81, 181,1)",
          borderColor: "rgba(63, 81, 181,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(63, 81, 181,0.8)",
          hoverBorderColor: "rgba(63, 81, 181,1)",
          data: [65, 59, 80, 81, 56, 55, 60, 53, 58, 81, 56, 55]
        }
      ]
    };

    const options5 = {
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)"
            },
            ticks: {
              display: false
            }
          }
        ]
      },
      maintainAspectRatio: false
    };

    const data6 = {
      labels: ["Firefox", "Chrome", "Edge", "IE", "Safari", "Opera", "Others"],
      datasets: [
        {
          label: "2017",
          backgroundColor: "rgba(233, 30, 99,0.2)",
          borderColor: "rgba(233, 30, 99,1)",
          pointBackgroundColor: "rgba(233, 30, 99,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(233, 30, 99,1)",
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: "2018",
          backgroundColor: "rgba(63, 81, 181,0.2)",
          borderColor: "rgba(63, 81, 181,1)",
          pointBackgroundColor: "rgba(63, 81, 181,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(63, 81, 181,1)",
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    };

    const options6 = {
      legend: {
        display: false
      },
      scale: {
        display: true
      },
      maintainAspectRatio: false
    };

    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div class="page-title">
                <div class="float-left">
                  <h1 class="title">Dashboard</h1>
                </div>
              </div>

              <div class="row margin-0">
                <div class="col-12 col-lg-6 col-xl-4">
                  <section class="box ">
                    <header class="panel_header">
                      <h2 class="title float-left">Platforms Used</h2>
                      <div class="actions panel_actions float-right">
                        <i class="box_toggle fa fa-chevron-down" />
                        <i class="box_setting fa fa-cog" />
                        <i class="box_close fa fa-times" />
                      </div>
                    </header>
                    <div class="content-body">
                      {" "}
                      <div class="row">
                        <div class="col-12">
                          <div class="chart-container">
                            <div className="chart-area">
                              <Doughnut
                                height={180}
                                data={data1}
                                options={options1}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>{" "}
                </div>

                <div class="col-12 col-lg-6 col-xl-4">
                  <section class="box ">
                    <header class="panel_header">
                      <h2 class="title float-left">Guest / Registered</h2>
                      <div class="actions panel_actions float-right">
                        <i class="box_toggle fa fa-chevron-down" />
                        <i class="box_setting fa fa-cog" />
                        <i class="box_close fa fa-times" />
                      </div>
                    </header>
                    <div class="content-body">
                      {" "}
                      <div class="row">
                        <div class="col-12">
                          <div class="chart-container">
                            <Bar data={data2} height={200} options={options2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>{" "}
                </div>

                <div class="col-12 col-lg-6 col-xl-4">
                  <section class="box ">
                    <header class="panel_header">
                      <h2 class="title float-left">Browsers Used</h2>
                      <div class="actions panel_actions float-right">
                        <i class="box_toggle fa fa-chevron-down" />
                        <i class="box_setting fa fa-cog" />
                        <i class="box_close fa fa-times" />
                      </div>
                    </header>
                    <div class="content-body">
                      {" "}
                      <div class="row">
                        <div class="col-12">
                          <div class="chart-container">
                            <div className="chart-area">
                              <Line
                                data={data3}
                                options={options3}
                                height={200}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>{" "}
                </div>

                <div class="col-12 col-lg-6 col-xl-4">
                  <section class="box ">
                    <header class="panel_header">
                      <h2 class="title float-left">Site Referrals</h2>
                      <div class="actions panel_actions float-right">
                        <i class="box_toggle fa fa-chevron-down" />
                        <i class="box_setting fa fa-cog" />
                        <i class="box_close fa fa-times" />
                      </div>
                    </header>
                    <div class="content-body">
                      {" "}
                      <div class="row">
                        <div class="col-12">
                          <div class="chart-container">
                            <Scatter
                              data={data4}
                              options={options4}
                              height={200}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>{" "}
                </div>

                <div class="col-12 col-lg-6 col-xl-4">
                  <section class="box ">
                    <header class="panel_header">
                      <h2 class="title float-left">Today Visitors</h2>
                      <div class="actions panel_actions float-right">
                        <i class="box_toggle fa fa-chevron-down" />
                        <i class="box_setting fa fa-cog" />
                        <i class="box_close fa fa-times" />
                      </div>
                    </header>
                    <div class="content-body">
                      {" "}
                      <div class="row">
                        <div class="col-12">
                          <div class="chart-container">
                            <Bar data={data5} height={200} options={options5} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>{" "}
                </div>

                <div class="col-12 col-lg-6 col-xl-4">
                  <section class="box ">
                    <header class="panel_header">
                      <h2 class="title float-left">Server Load</h2>
                      <div class="actions panel_actions float-right">
                        <i class="box_toggle fa fa-chevron-down" />
                        <i class="box_setting fa fa-cog" />
                        <i class="box_close fa fa-times" />
                      </div>
                    </header>
                    <div class="content-body">
                      {" "}
                      <div class="row">
                        <div class="col-12">
                          <div class="chart-container">
                            <Radar
                              data={data6}
                              options={options6}
                              height={200}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>{" "}
                </div>
              </div>

              <div class="clearfix" />
              <div class="col-xl-12">
                <section class="box nobox marginBottom0">
                  <div class="content-body">
                    {" "}
                    <div class="row">
                      <div class="col-xl-3 col-md-6 col-12">
                        <div class="r4_counter db_box">
                          <i class="float-left fa fa-thumbs-up icon-md icon-rounded icon-primary" />
                          <div class="stats">
                            <h4>
                              <strong>45%</strong>
                            </h4>
                            <span>New Orders</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-md-6 col-12">
                        <div class="r4_counter db_box">
                          <i class="float-left fa fa-shopping-cart icon-md icon-rounded icon-accent" />
                          <div class="stats">
                            <h4>
                              <strong>243</strong>
                            </h4>
                            <span>New Products</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-md-6 col-12">
                        <div class="r4_counter db_box">
                          <i class="float-left fa fa-dollar icon-md icon-rounded icon-purple" />
                          <div class="stats">
                            <h4>
                              <strong>$3424</strong>
                            </h4>
                            <span>Profit Today</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3 col-md-6 col-12">
                        <div class="r4_counter db_box">
                          <i class="float-left fa fa-users icon-md icon-rounded icon-warning" />
                          <div class="stats">
                            <h4>
                              <strong>1433</strong>
                            </h4>
                            <span>New Users</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div class="col-12">
                <section class="box ">
                  <header class="panel_header">
                    <h2 class="title float-left">Visitor's Statistics</h2>
                    <div class="actions panel_actions float-right">
                      <i class="box_toggle fa fa-chevron-down" />
                      <i class="box_setting fa fa-cog" />
                      <i class="box_close fa fa-times" />
                    </div>
                  </header>
                  <div class="content-body">
                    {" "}
                    <div class="row">
                      <div class="col-12">
                        <div class="wid-vectormap">
                          <div class="row">
                            <div class="col-12 col-md-9">
                              <div style={{ width: 100 + "%", height: 300 }}>
                                <VectorMap
                                  map={"world_mill"}
                                  backgroundColor="#ffffff"
                                  ref="map"
                                  containerStyle={{
                                    width: "100%",
                                    height: "100%"
                                  }}
                                  containerClassName="map"
                                />
                              </div>
                            </div>
                            <div class="map_progress col-12 col-md-3">
                              <h4>Unique Visitors</h4>
                              <span class="text-muted">
                                <small>Last Week Rise by 62%</small>
                              </span>
                              <div class="progress">
                                <div
                                  class="progress-bar progress-bar-primary"
                                  role="progressbar"
                                  aria-valuenow="62"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: 62 + "%" }}
                                />
                              </div>
                              <br />
                              <h4>Registrations</h4>
                              <span class="text-muted">
                                <small>Up by 57% last 7 days</small>
                              </span>
                              <div class="progress">
                                <div
                                  class="progress-bar progress-bar-primary"
                                  role="progressbar"
                                  aria-valuenow="57"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: 57 + "%" }}
                                />
                              </div>
                              <br />
                              <h4>Direct Sales</h4>
                              <span class="text-muted">
                                <small>Last Month Rise by 22%</small>
                              </span>
                              <div class="progress">
                                <div
                                  class="progress-bar progress-bar-primary"
                                  role="progressbar"
                                  aria-valuenow="22"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: 22 + "%" }}
                                />
                              </div>
                            </div>
                          </div>
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

export default Dashboard;

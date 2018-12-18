import { Row, Col } from "reactstrap";
import React from "react";
import {} from "components";

class CompanyDetail extends React.Component {
  render() {
    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <div class="page-title">
                <div class="float-left">
                  <h1 class="title">CompanyDetail</h1>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default CompanyDetail
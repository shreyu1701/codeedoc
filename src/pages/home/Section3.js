import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CaseStudy from "/Users/shrey/OneDrive/Desktop/Basic/shreyansh_codeedoc-refactor/src/img/Case-study-1024x545.png";
import { useNavigate } from "react-router-dom";

function Section3() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Container fluid>
        <div className="Container">
          <Row className="Container-inline-flex">
            <Col className=" Container-flex">
              <div className="padding">
                <div className=" Container-flex">
                  <div className=" Container-flex">
                    <h1 className="title-point">Case Studies</h1>
                  </div>
                </div>
                <div className=" Container-flex">
                  <p className="des-text">
                    Breakdown of how we take a problem and craft a solution for
                    it by using suitable technologies.
                  </p>
                </div>
                <div className=" Container-flex">
                  <div className="left-align">
                    <Button
                      className="Button"
                      onClick={() => navigate("/services")}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col className=" Container-flex">
              <div className="align-img">
                <img src={CaseStudy} className="logo-main2" alt="logo" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
export default Section3;

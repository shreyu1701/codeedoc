import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import logo1 from "../../img/Main-Image-1-1-1024x1024.png";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Section1() {
  const navigate = useNavigate();
  return (
    <>
      <div className="App">
        <Container fluid>
          <Row className="Container-inline-flex">
            <Col className=" Container-flex">
              <div className="padding">
                <div className=" Container-flex">
                  <div className="Container-flex">
                    <div className="padding-4">
                      <FontAwesomeIcon
                        icon={faCircle}
                        size="xs"
                        style={{ color: "#008000" }}
                      />
                    </div>
                    <h1 className="bullet">On-Demand Development</h1>
                  </div>
                </div>
                <div>
                  <h1 className="title-point">
                    Mobile &<br></br>Web Development
                  </h1>
                </div>
                <div>
                  <p className="des-text">
                    We leverage software development to grow your venture,
                    <br></br> scale your impact, and propel your mission
                    forward.
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
                <img src={logo1} className="logo-main1" alt="logo" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Section1;

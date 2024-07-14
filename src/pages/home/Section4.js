import React from "react";
import { Button, Col, Container, Figure, Row } from "react-bootstrap";
import logo3 from "/Users/shrey/OneDrive/Desktop/Basic/shreyansh_codeedoc-refactor/src/img/Get-Consultaion-1536x1536.png";
import Launch from "/Users/shrey/OneDrive/Desktop/Basic/shreyansh_codeedoc-refactor/src/img/download1.png";
import Scale from "/Users/shrey/OneDrive/Desktop/Basic/shreyansh_codeedoc-refactor/src/img/download2.png";
import Revamp from "/Users/shrey/OneDrive/Desktop/Basic/shreyansh_codeedoc-refactor/src/img/download3.png";
import Rescue from "/Users/shrey/OneDrive/Desktop/Basic/shreyansh_codeedoc-refactor/src/img/download4.png";
import Brainstorming from "/Users/shrey/OneDrive/Desktop/Basic/shreyansh_codeedoc-refactor/src/img/download5.png";
import ProofOfConcept from "/Users/shrey/OneDrive/Desktop/Basic/shreyansh_codeedoc-refactor/src/img/download6.png";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Section4() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Container fluid>
        <Row className="Container-inline2-flex">
          <Col className=" Container-flex">
            <div className="align-img">
              <img src={logo3} className="logo-main3" alt="logo" />
            </div>
          </Col>
          <Col className=" Container-flex">
            <div className="padding-2">
              <div className=" Container-flex">
                <div className="Container-flex">
                  <div className="padding-4">
                    <FontAwesomeIcon
                      icon={faCircle}
                      size="xs"
                      style={{ color: "#008000" }}
                    />
                  </div>
                  <h1 className="bullet">FREE 30 MINUTES STRATEGY SESSION</h1>
                </div>
              </div>
              <div>
                <h1 className="title2-point">
                  Let’s talk about your next <br></br> big idea
                </h1>
              </div>
              <div>
                <p className="des2-text">
                  And let's give your idea wings to fly by making it <br></br> a
                  reality.
                </p>
              </div>
              <div>
                <div className="Container, Container-align-flex">
                  <div className="Container-flex">
                    <Figure.Image className="gallery-item" src={Launch} />
                    <h1 className="bullet">Launch</h1>
                  </div>
                  <div className="Container-flex">
                    <div className="Container-flex">
                      <Figure.Image className="gallery-item" src={Scale} />
                      <h1 className="bullet">Scale</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="Container, Container-align-flex">
                  <div className="Container-flex">
                    <Figure.Image className="gallery-item" src={Revamp} />
                    <h1 className="bullet">Revamp</h1>
                  </div>
                  <div className="Container-flex">
                    <div className="Container-flex">
                      <Figure.Image className="gallery-item" src={Rescue} />
                      <h1 className="bullet">Rescue</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="Container, Container-align-flex">
                  <div className="Container-flex">
                    <Figure.Image
                      className="gallery-item"
                      src={Brainstorming}
                    />
                    <h1 className="bullet">Brainstorming</h1>
                  </div>
                  <div className="Container-flex">
                    <div className="Container-flex">
                      <Figure.Image
                        className="gallery-item"
                        src={ProofOfConcept}
                      />
                      <h1 className="bullet">Proof of Concept</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" Container-inline-flex">
                <div className="right-align">
                  <Button
                    className="Button"
                    onClick={() => navigate("/consultation")}
                  >
                    Book A Free Call Now!
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Section4;

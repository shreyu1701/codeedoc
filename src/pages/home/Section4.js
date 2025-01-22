import React from "react";
import { Button, Container, Row, Col, Figure } from "react-bootstrap";
import logo3 from "../../img/Get-Consultaion-1536x1536.png";
import Launch from "../../img/download1.png";
import Scale from "../../img/download2.png";
import Revamp from "../../img/download3.png";
import Rescue from "../../img/download4.png";
import Brainstorming from "../../img/download5.png";
import ProofOfConcept from "../../img/download6.png";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Section4() {
  const navigate = useNavigate();
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <Container fluid>
        <Row className="flex flex-col lg:flex-row items-center">
          {/* Left Column: Image */}
          <Col className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="flex justify-center">
              <img
                src={logo3}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                alt="Logo"
              />
            </div>
          </Col>

          {/* Right Column: Text and Gallery */}
          <Col className="lg:w-1/2">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-4">
                <h1 className="ml-4 text-2xl font-semibold text-gray-800">
                  FREE 30 MINUTES STRATEGY SESSION
                </h1>
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-4 ml-4">
                Let’s talk about your next <br /> big idea
              </h1>

              <p className="text-gray-600 mb-6 ml-4">
                And let's give your idea wings to fly by making it a reality.
              </p>

              {/* Gallery (First Row) */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col items-center">
                  <Figure.Image
                    src={Launch}
                    className="w-20 h-20 object-contain"
                  />
                  <h2 className="mt-2 text-xl font-semibold text-gray-800">
                    Launch
                  </h2>
                </div>
                <div className="flex flex-col items-center">
                  <Figure.Image
                    src={Scale}
                    className="w-20 h-20 object-contain"
                  />
                  <h2 className="mt-2 text-xl font-semibold text-gray-800">
                    Scale
                  </h2>
                </div>
              </div>

              {/* Gallery (Second Row) */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col items-center">
                  <Figure.Image
                    src={Revamp}
                    className="w-20 h-20 object-contain"
                  />
                  <h2 className="mt-2 text-xl font-semibold text-gray-800">
                    Revamp
                  </h2>
                </div>
                <div className="flex flex-col items-center">
                  <Figure.Image
                    src={Rescue}
                    className="w-20 h-20 object-contain"
                  />
                  <h2 className="mt-2 text-xl font-semibold text-gray-800">
                    Rescue
                  </h2>
                </div>
              </div>

              {/* Gallery (Third Row) */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col items-center">
                  <Figure.Image
                    src={Brainstorming}
                    className="w-20 h-20 object-contain"
                  />
                  <h2 className="mt-2 text-xl font-semibold text-gray-800">
                    Brainstorming
                  </h2>
                </div>
                <div className="flex flex-col items-center">
                  <Figure.Image
                    src={ProofOfConcept}
                    className="w-20 h-20 object-contain"
                  />
                  <h2 className="mt-2 text-xl font-semibold text-gray-800">
                    Proof of Concept
                  </h2>
                </div>
              </div>

              {/* Button Section */}
              <div className="flex justify-center">
                <Button
                  className="bg-black text-white py-2 px-6 rounded-lg hover:bg-[#008000] transition"
                  onClick={() => navigate("/consultation")}
                >
                  Book A Free Call Now!
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section4;

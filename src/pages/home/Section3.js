import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import CaseStudy from "../../img/Case-study-1024x545.png";
import { useNavigate } from "react-router-dom";

function Section3() {
  const navigate = useNavigate();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <Container fluid>
        <div className="max-w-screen-xl mx-auto">
          <Row className="flex flex-col lg:flex-row items-center justify-between">
            {/* Text Section */}
            <Col className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  Case Studies
                </h1>
                <p className="text-gray-600 mb-6">
                  Breakdown of how we take a problem and craft a solution for it
                  by using suitable technologies.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Button
                    className="bg-black text-white py-2 px-6 rounded hover:bg-[#008000] transition"
                    onClick={() => navigate("/services")}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </Col>

            {/* Image Section */}
            <Col className="lg:w-1/2">
              <div className="flex justify-center">
                <img
                  src={CaseStudy}
                  alt="Case Study"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Section3;

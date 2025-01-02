import React from "react";
import { Col, Container, Figure, Row } from "react-bootstrap";
import Android from "../../img/uploads/android.png";
import AWS from "../../img/uploads/aws.png";
import Flutter from "../../img/uploads/flutter.png";
import GoogleCloud from "../../img/uploads/googlecloud.png";
import Wordpress from "../../img/uploads/wordpress.png";
import Angular from "../../img/uploads/angular.png";
import CSS from "../../img/uploads/css.png";
import HTML from "../../img/uploads/html.png";
import Javascript1 from "../../img/uploads/javascript1.png";
import Javascript2 from "../../img/uploads/javascript2.png";
import react from "../../img/uploads/react.png";
import Vue from "../../img/uploads/vue.png";
import Apple from "../../img/uploads/apple.png";
import MangoDB from "../../img/uploads/mangoDB.png";
import PostgreSQL from "../../img/uploads/postgreSQL.png";
import Python from "../../img/uploads/python.png";

function Section2() {
  return (
    <div className="App">
      <Container fluid>
        <div className="Container">
          <Row className="Container-flex, Container-inline-flex">
            <Col className="Container-box">
              <div className="Container-center-flex">
                <h1 className="title-point">Core Technologies</h1>
              </div>
              <div className="space"></div>
              <div className="space"></div>
              <div className="Container-inline-flex-nospace">
                <div className="Container-gallery Container-flex">
                  <Figure className="Container-direction-flex">
                    <Figure.Image className="gallery-logo" src={Android} />
                    <Figure.Image className="gallery-logo" src={AWS} />
                    <Figure.Image className="gallery-logo" src={Flutter} />
                    <Figure.Image className="gallery-logo" src={GoogleCloud} />
                  </Figure>
                </div>
                <div className="Container-gallery Container-flex">
                  <Figure className="Container-direction-flex">
                    <Figure.Image className="gallery-logo" src={Wordpress} />
                    <Figure.Image className="gallery-logo" src={Angular} />
                    <Figure.Image className="gallery-logo" src={Python} />
                    <Figure.Image className="gallery-logo" src={PostgreSQL} />
                  </Figure>
                </div>
              </div>
              <div className="Container-inline-flex-nospace">
                <div className="Container-gallery Container-flex">
                  <Figure className="Container-direction-flex">
                    <Figure.Image className="gallery-logo" src={Javascript1} />
                    <Figure.Image className="gallery-logo" src={Javascript2} />
                    <Figure.Image className="gallery-logo" src={CSS} />
                    <Figure.Image className="gallery-logo" src={HTML} />
                  </Figure>
                </div>
                <div className="Container-gallery Container-flex">
                  <Figure className="Container-direction-flex">
                    <Figure.Image className="gallery-logo" src={react} />
                    <Figure.Image className="gallery-logo" src={Vue} />
                    <Figure.Image className="gallery-logo" src={Apple} />
                    <Figure.Image className="gallery-logo" src={MangoDB} />
                  </Figure>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
export default Section2;

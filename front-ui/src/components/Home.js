import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import { BiCustomize } from 'react-icons/bi'

import ayeshaBackground from "../hand_dark_cropped.jpg";
import safe_travel from "../../src/safe-travel.jpg";
import customize_travel from "../../src/customize-travel.jpg";
import group_travel from "../../src/group-travel.jpg"
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid ">
        <div className="container jumbo-extra-height">
          <div className="text-center">
            {/* <p className="lead">Customized Experiences </p>
        <p className="lead">Safety Recommendations </p>
        <p className="lead">Pre-Trip Planning</p>
        <p className="lead">Group Trip Planning</p> */}

            <br />
            <br />
            <br />
            <br />
            <br />
          </div>

          <div className="text-center text-white">
            <h1 className="display-4 text-center">
        
              Sophisticated Safe Traveling

            </h1>
            <p className="lead text-center">Let me plan your next destinaton</p>
            <button type="button" className="btn btn-secondary btn-lg">
              Check Out Our Travel Specials
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Container className="text-center">
        <Row>
          <Col>

    {/* <img src={customize_travel} class="travelImg" /> */}
          <h4>Customized Experiences</h4>
          </Col>
          <Col>
          <h4> Group Trip Planning</h4>
          </Col>
          <Col>
          <h4>Safety Recommendations</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

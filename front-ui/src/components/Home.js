import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import wing_round from "../../src/wing_round.jpg";
import safe_travel from "../../src/safe-travel.jpg";
import customize_travel from "../../src/customize-travel.jpg";
import group_travel from "../../src/group-travel.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid flex ">
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
      <Container className="text-center desc-text">

        <h1 >"Literally the best trip I've ever experienced. We stayed at a beautiful hotel and the recommended restaraunts were incredible! We always felt safe and our travel planner was always available during the trip. We cannot wait to book again!"</h1>
          <h3 >-- A satasfied Traveler</h3>
      </Container>
        <br />
        <br />
      <Container className="text-center desc-text">
        <Container className="container-img">
        <img className="mid-desc-image" src={wing_round} />
        <div className="center-in-container">
          <h1>Specialized Options</h1>
        </div>
        </Container>
      
      <br />
      <br />



        <br />
        <br />
        <Row>
          <Col>
            <img className="desc-image" src={customize_travel} />

            <h4>Customized</h4>
            <p> We will  build activities, lodging, flights, food packages and more to fit your needs. We strive to create your best experience.</p>
          </Col>

          <Col>
            <img className="desc-image" src={group_travel} />

            <h4> Groups</h4>
            <p>We specialize in accomodating groups of all sizes. Whether you are looking to book a solo trip or a family reunion, we want to work with you. </p>
          </Col>
          <Col>
            <img className="desc-image" src={safe_travel} />
            <h4>Safety</h4>
            <p> Our team prioritizes the safety of our travelers. Our recommendations and best practices will ensure the safety of your trips.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

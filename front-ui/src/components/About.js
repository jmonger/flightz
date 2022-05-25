import React from "react";
import { Form, Row, Col, Button, Image, Container } from "react-bootstrap";
import './About.css';
import AboutImage from "../DSC_1030.jpg";


const About = () => {
  return (
    <div>
      <img src={AboutImage} className="AboutImage"></img>
      <Container>
        <h1>
         Hey There!
        </h1>   
       <p>dasfas</p>
       <p>dasfas</p>
       <p>dasfas</p>
       <p>dasfas</p>
       <p>dasfas</p>
       <p>dasfas</p>
       <p>dasfas</p>
      
      </Container> 
    </div>
  );
};

export default About;
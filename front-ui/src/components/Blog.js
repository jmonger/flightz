import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./Blog.css";
import bali_img from "../../src/bali-blog.jpg";
import paris_img from "../../src/paris-blog.jpg";
import tanzania_img from "../../src/tanzania-blog.jpg";
import tulum_img from "../../src/tulum-blog.jpg";


const Blog = () => {
  return (
    <div>
      <Container>
        <h1>Blog</h1>
        <Row  className="justify-content-md-center">
          <Col className="d-flex justify-content-center" md={4}>
            <Card style={{ width: "18rem" }} >
              <Card.Img variant="top" src={bali_img} />
              <Card.Body>
                <Card.Title>Bali</Card.Title>
                <Card.Text>October 2019</Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={tanzania_img} />
              <Card.Body>
                <Card.Title>Tanzania</Card.Title>
                <Card.Text>October 2021</Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={tulum_img} />
              <Card.Body>
                <Card.Title>Tulum</Card.Title>
                <Card.Text>June 2021</Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;

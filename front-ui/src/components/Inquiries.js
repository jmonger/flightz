import React from "react";
import { Form, Row, Col, Button, Image } from "react-bootstrap";
import './Inquiries.css';

const Inquiries = () => {
  return (
    <div className="inquiry-form">
        <h4>Inquiries</h4>
        <p>We'd love to hear from you.</p>
        <p>Please leave your contact information and an expert specialist will be in contact with you.</p>
          <Form>
            <Form.Group controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text"></Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicTextArea">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" style={{ height: '100px' }}></Form.Control>
            </Form.Group>
          </Form>
          <br />
          <Button variant="success">Submit Inquiry</Button>
    </div>
  );
};

export default Inquiries;

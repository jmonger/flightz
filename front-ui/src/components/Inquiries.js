import React, { useState } from "react";
import InquiryDataService from "../services/inquiries.service";
import { Form, Button } from "react-bootstrap";
import './Inquiries.css';

const Inquiries = () => {
  const initialInquiryState = {
    _id: null,
    name: "",
    email: "",
    phone: "",
    message: ""
  };

  const [inquiry, setInquiry] = useState(initialInquiryState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setInquiry({...inquiry, [name]: value});
  };

  const saveInquiry = () => {
    var data = {
      name: inquiry.name,
      email: inquiry.email,
      phone: inquiry.phone,
      message: inquiry.message
    };
    InquiryDataService.create(data)
      .then(response => {
        setInquiry({
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
          message: response.data.message
        });
        setSubmitted(true);
        console.log(response.data);
        setInquiry(initialInquiryState);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newInquiry = () => {
    setInquiry(initialInquiryState);
    setSubmitted(false);
  }

  return (
    <div className="inquiry-form">
        <h4>Inquiries</h4>
        <p>We'd love to hear from you.</p>
        <p>Please leave your contact information and an expert specialist will be in contact with you.</p>
          <Form>
            <Form.Group controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control 
              type="text"
              id="name"
              required
              value={inquiry.name}
              onChange={handleInputChange}
              name="name"
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Email Address</Form.Label>
              <Form.Control 
                            type="text"
                            id="email"
                            required
                            value={inquiry.email}
                            onChange={handleInputChange}
                            name="email"></Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicText">
              <Form.Label>Phone</Form.Label>
              <Form.Control 
                            type="text"
                            id="phone"
                            required
                            value={inquiry.phone}
                            onChange={handleInputChange}
                            name="phone"
              >

              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicTextArea">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                            type="text"
                            id="message"
                            required
                            value={inquiry.message}
                            onChange={handleInputChange}
                            name="message"as="textarea" style={{ height: '100px' }}></Form.Control>
            </Form.Group>
          </Form>
          <br />
          <Button onClick={saveInquiry} variant="success">Submit Inquiry</Button>
    </div>
  );
};

export default Inquiries;

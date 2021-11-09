import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Form, FloatingLabel, Button } from "react-bootstrap";

function Contact() {
  return (
    <div className="contact" id="contact">
      <Fade bottom>
        <div className="form-container">
          <h1>Contact Us</h1>
          <hr />
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Subject"
            className="mb-3"
          >
            <Form.Control as="textarea" placeholder="Message" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Message">
            <Form.Control
              as="textarea"
              placeholder="Message"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <br/>
          <Button variant="danger">Submit</Button>
        </div>
      </Fade>
    </div>
  );
}

export default Contact;

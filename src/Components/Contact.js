import React from "react";
import Fade from "react-reveal/Fade";
import emailjs from "emailjs-com";
import { Form, FloatingLabel, Button } from "react-bootstrap";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vv2w4xg",
        "template_c59k4io",
        e.target,
        "user_yCGECHosg483IJ2p9jwwl"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="contact" id="contact">
      <Fade bottom>
        <form className="form-container" onSubmit={sendEmail}>
          <h1>Contact Us</h1>
          <hr />
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control name="email" type="email" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingTextarea"
            label="Subject"
            className="mb-3"
          >
            <Form.Control name="subject" as="textarea" placeholder="Subject" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingTextarea2" label="Message">
            <Form.Control
              as="textarea"
              placeholder="Message"
              style={{ height: "100px" }}
              name="message"
            />
          </FloatingLabel>
          <br />

          <Button type="submit" variant="danger">Send</Button>
        </form>
      </Fade>
    </div>
  );
}

export default Contact;

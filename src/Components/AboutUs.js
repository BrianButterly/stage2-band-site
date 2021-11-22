import React from "react";
import Fade from "react-reveal/Fade";

function AboutUs() {
  return (
    <div className="about" id="about">
      <Fade bottom>
        <br/>
        <h2>About Us</h2>
        <img src="img3.jpeg" alt="logo" className="band" />
      </Fade>
    </div>
  );
}

export default AboutUs;

import React from "react";
import Fade from "react-reveal/Fade";

function AboutUs() {
  return (
    <div className="about" id="about">
      <Fade bottom>
        <h3 style={{float: "left", paddingTop: "10px"}} >About Us</h3>
        <img src="img3.jpeg" alt="logo" className="band" />
      </Fade>
    </div>
  );
}

export default AboutUs;

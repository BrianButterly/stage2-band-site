import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

function Home() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="home" id="home">
      <Fade bottom></Fade>
      <img src="logo.png" alt="logo" class="stage2" />
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-55}
        duration={150}
        onClick={() =>
          setTimeout(() => {
            setExpanded(false);
          }, 150)
        }
      >
        <svg class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </Link>
    </div>
  );
}

export default Home;

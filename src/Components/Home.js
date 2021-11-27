import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import ReactAudioPlayer from "react-audio-player";

function Home() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div class="bubbles">
      <div class="bubble">
        <img src="note.png" alt="note" class="note" />
      </div>
      <div class="bubble">
        <img src="note.png" alt="note" />
      </div>
      <div class="bubble">
        <img src="note.png" alt="note" class="note" />
      </div>
      <div class="bubble">
        <img src="note.png" alt="note" />
      </div>
      <div class="bubble">
        <img src="note.png" alt="note" class="note" />
      </div>
      <div class="bubble">
        <img src="note.png" alt="note" />
      </div>
      <div class="bubble">
        <img src="note.png" alt="note" class="note" />
      </div>
      <div class="bubble">
        <img src="note.png" alt="note" />
      </div>
      <div class="bubble">
        <img src="note.png" alt="note" class="note" />
      </div>
      <div class="bubble">
        <img src="note.png" alt="note" />
      </div>
      <div class="bubble">
        <img src="note.png" alt="note" />
      </div>
      <div class="bubble">
        <img src="note.png" alt="note" />
      </div>
      <div class="bubble">
        <img src="note.png" alt="note" />
      </div>
      <div class="bubble">
        <img src="note.png" alt="note" />
      </div>
      <div class="bubble">
        <img src="note.png" alt="note" />
      </div>

      <div className="home" id="home">

        <div className="audio_player" >

        LISTEN TO NEW SINGLE
        <br/>
        <ReactAudioPlayer
          src="/Let’s Get Back to Dancing.mp3"
          
          controls
          />
        
        </div>
        
        <Fade bottom>
          <img src="logo.png" alt="logo" className="stage2" />
        </Fade>
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
    </div>
  );
}

export default Home;

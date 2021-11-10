import React from "react";
import Fade from "react-reveal/Fade";

function Shows() {
  return (
    <div className="shows" id="shows">
      <Fade bottom>
        <br />
        <h1>Upcoming Shows</h1>
        <br />
        <hr />
        <h3>Nov 18th</h3>
        <h4>The Carlyann 8pm</h4>
        <hr />
        <h3>Nov 20th</h3>
        <h4>Jimmy's 10pm</h4>
        <hr />
        <h3>Nov 26th</h3>
        <h4>joe's 9pm</h4>
        <hr />
        <h3>Nov 29th</h3>
        <h4>the bar 11pm</h4>
      </Fade>
    </div>
  );
}

export default Shows;

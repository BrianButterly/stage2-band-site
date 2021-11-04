import React, { useState } from "react";
import { Link } from "react-scroll";
import { Navbar, Container, Nav } from "react-bootstrap";

function Menu() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Navbar expanded={expanded} bg="white" expand="lg" fixed="top" >
        <Container>
          <img src="logo.png" alt="logo" class="logo" />
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : "expanded")}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                activeClass="active"
                to="home"
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
                <Nav.Link href="/">Home</Nav.Link>
              </Link>
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
                <Nav.Link href="/about">About Us</Nav.Link>
              </Link>
              <Link
                activeClass="active"
                to="shows"
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
                <Nav.Link href="/shows">Shows</Nav.Link>
              </Link>
              <Link
                activeClass="active"
                to="contact"
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
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;

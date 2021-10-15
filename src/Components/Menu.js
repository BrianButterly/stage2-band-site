import React from "react";
import { Link } from "react-scroll";
import { Navbar, Container, Nav } from "react-bootstrap";

const Menu = () => (
  <div>
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>Stage2</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-55}
            duration={100}
            >
            <Nav.Link href="/">Home</Nav.Link>
            </Link>
            <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-55}
            duration={100}
            >
            <Nav.Link href="/about">About Us</Nav.Link>
            </Link>
            <Link
            activeClass="active"
            to="shows"
            spy={true}
            smooth={true}
            offset={-55}
            duration={100}
            >
              <Nav.Link href="/shows">Shows</Nav.Link>
            </Link>
            <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-55}
            duration={100}
            >
               <Nav.Link href="/contact">Contact</Nav.Link>
            </Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

export default Menu;

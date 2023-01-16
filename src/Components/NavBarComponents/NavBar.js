import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


const NavBar = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg" id="navbar-target" collapseOnSelect >
      <Container fluid>
        <Navbar.Brand href="#home">Jerome Regalado</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse
          id={`offcanvasNavbar-expand-lg`}
        >
            <Nav className="justify-content-end text-center flex-grow-1 pe-3">
              <Nav.Link className="nav-links" href="#home">Home</Nav.Link>
              <Nav.Link className="nav-links" href="#aboutMe">About Me</Nav.Link>
              <Nav.Link className="nav-links" href="#projects">Projects</Nav.Link>
              <Nav.Link className="nav-links"  href="#contactMe">Contact Me</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
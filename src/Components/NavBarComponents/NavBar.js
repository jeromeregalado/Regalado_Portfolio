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
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="nav-links text-center" href="#home">Home</Nav.Link>
              <Nav.Link className="nav-links text-center" href="#aboutMe">About Me</Nav.Link>
              <Nav.Link className="nav-links text-center" href="#projects">Projects</Nav.Link>
              <Nav.Link className="nav-links text-center"  href="#contactMe">Contact Me</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
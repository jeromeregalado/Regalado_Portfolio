import React from "react";
import { Navbar, Offcanvas, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Jerome Regalado</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton placeholder="start">
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Links for my webpage
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="nav-links" href="#home" data-bs-dismiss="offcanvas">Home</Nav.Link>
              <Nav.Link className="nav-links" href="#aboutMe" data-bs-dismiss="offcanvas">About Me</Nav.Link>
              <Nav.Link className="nav-links" href="#projects" data-bs-dismiss="offcanvas">Projects</Nav.Link>
              <Nav.Link className="nav-links" href="#contactMe" data-bs-dismiss="offcanvas">Contact Me</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
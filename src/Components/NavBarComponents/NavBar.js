import React, {useState} from "react";
import { Navbar, Offcanvas, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const toggleOffCanvas = () => {
    setShow((show) => !show);
  };

  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg" id="navbar-target">
      <Container fluid>
        <Navbar.Brand href="#home">Jerome Regalado</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleOffCanvas}/>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
          show={show}
          onHide={toggleOffCanvas}
        >
          <Offcanvas.Header closeButton placeholder="start">
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Links for my webpage
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="nav-links" href="#home" onClick={toggleOffCanvas}>Home</Nav.Link>
              <Nav.Link className="nav-links" href="#aboutMe" onClick={toggleOffCanvas}>About Me</Nav.Link>
              <Nav.Link className="nav-links" href="#projects" onClick={toggleOffCanvas}>Projects</Nav.Link>
              <Nav.Link className="nav-links" href="#contactMe" onClick={toggleOffCanvas}>Contact Me</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
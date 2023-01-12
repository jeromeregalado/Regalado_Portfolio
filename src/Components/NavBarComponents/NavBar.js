import React from "react";
import { Navbar, Offcanvas, Nav, Container, NavLink  } from "react-bootstrap";

const NavBar = () => {
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav .container ul li");
  window.onscroll = () => {
    var current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60) {
        current = section.getAttribute("id"); }
    });
  
    navLi.forEach((li) => {
      NavLink.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  };
    return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Jerome Regalado</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Links for my webpage
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <ul>
                      <li><a className="nav-links" href="#home" spy to="Home">Home</a></li>
                      <li><a className="nav-links" href="#aboutMe" spy to="About Me">About Me</a></li>
                      <li><a className="nav-links" href="#projects" spy to="Projects">Projects</a></li>
                      <li><a className="nav-links" href="#contactMe" spy to="Contact Me">Contact Me</a></li>
                      </ul>
                    </Nav>
              </Offcanvas.Body>
              </Navbar.Offcanvas>
          </Container>
        </Navbar>
    );
  }
  export default NavBar;
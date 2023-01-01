import './App.css';
import React from 'react';
import { Carousel, Nav, Navbar, Container, Offcanvas, Button, Accordion, Form, ProgressBar, Alert,Card, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() 
{
  const nowCSS = 70;
  const nowJava = 80;
  const nowSpringBoot = 70;
  const nowCPlusPlus = 70;
  const nowReact = 60;
  const nowBootstrap = 60;
  const accordionTitle1 = "My Current Programming Language Skillset";
  const accordionTitle2 = "My Gauge in my skillset";
  const accordionTitle3 = "My Educational Background";
  const accordionTitle4 = "My Other Traits";

  const MainCarousel = () =>{
    return(
      <Carousel>
                <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images3.alphacoders.com/136/136595.jpg"
                  alt="First slide"
                />
                  <h1 class="Hello">Hello</h1>
                  <p class="Hello1">I'm Jerome </p>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/277534964_3266710853616189_6306238281240243095_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGXaWypP2We13xKwNxqxG9NLChJW7TfOaQsKElbtN85pIHW6-i_Fx0hgpUDdMwVhUsFhekD8hISouzOKbWtqGWY&_nc_ohc=Ir6k2hiAj0sAX_xIUka&tn=GGCMv0Zi2rdcdMW5&_nc_ht=scontent.fcrk4-1.fna&oh=00_AfDFdt34EpQq82XdIqEaPdymVNuwrBEfOpYsSnghhyuONw&oe=63ADBE44"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h1 class="black-color-text">I'm a Software Engineer </h1>
                  <p class="black-color-text">I work for Cognizant Softvision / Magenic</p>
                </Carousel.Caption>

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://media.tenor.com/IDFH8znFG3QAAAAC/spongebob-squarepants-spongebob.gif"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h1>It's a pleasure seeing you look at my website</h1>
                  <p>
                    Hope you like my aesthetics.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
    )
  }

  const NavBar = () => {
    return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
          <Container fluid>
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
                      <Nav.Link className="nav-links" href="#home" spy to="Home">Home</Nav.Link>
                      <Nav.Link className="nav-links" href="#aboutMe" spy to="aboutMe">About Me</Nav.Link>
                      <Nav.Link className="nav-links" href="#contactMe" spy to="contactMe">Contact Me</Nav.Link>
                    </Nav>
              </Offcanvas.Body>
              </Navbar.Offcanvas>
          </Container>
        </Navbar>
    );
  }

  const ContactMeForm = () =>{
    return(
      <h1 className="navBarCenterText">Contact Me</h1>
      <Form className='formFormat'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" required/>
                      <Form.Text className="text-muted">
                        I'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="number" placeholder="Enter phone number" required/>
                      <Form.Text className="text-muted">
                        Don't worry, I'll never share your number with anyone else either.
                      </Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formQuestion">
                      <Form.Label>Question</Form.Label>
                      <Form.Control type="text" placeholder="Your Question for me" required/>
                      <Form.Text className="text-muted">
                        It can be anything, ranging from "How are you today", to anything political I guess LOL.
                      </Form.Text>
                      <Alert variant="primary">
                      <Alert.Heading>Just a quick reminder!</Alert.Heading>
                      <p>
                        Just don't be a weirdo XD LMAO
                      </p>
                      </Alert>
                    </Form.Group>

                    <center>
                    <div className="d-grid gap-2">
                      <Button variant="primary" type="submit" size='lg'>
                        Submit
                      </Button>
                    </div>
                    </center>
            </Form>
    );
  }

  const SkillsetCards = () =>{
    return(
      <Container>
                    <Row>
                    <Col>
                      <Card className='cardFormat textFormatForCard'>
                        <Card.Img variant="top" src="https://cdn.iconscout.com/icon/free/png-256/css-alt-3628710-3029935.png" />
                        <Card.Body>
                          <Card.Title>CSS</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary" 
                          href="https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-the-css-box-model-by-building-a-rothko-painting"
                          target="_blank"
                          >
                            Click to learn CSS
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card className='cardFormat textFormatForCard'>
                        <Card.Img variant="top" src="https://www.developer.com/wp-content/uploads/2021/09/Java-tutorials.jpg" />
                        <Card.Body>
                          <Card.Title>Java</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary" 
                          href="https://www.w3schools.com/java/default.asp"
                          target="_blank"
                          >
                            Click to learn Java
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card className='cardFormat textFormatForCard'>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOdvescVN6j2qIVm9Ym4y0boOwNLj-wlfV5j2hQXU&s"/>
                        <Card.Body>
                          <Card.Title>Spring Boot</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary" 
                          href="https://www.baeldung.com/spring-boot"
                          target="_blank"
                          >
                            Click to learn Spring Boot
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card className='cardFormat textFormatForCard'>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png" />
                        <Card.Body>
                          <Card.Title>C++</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary" 
                          href="https://www.learncpp.com/"
                          target="_blank"
                          >
                            Click to learn C++
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card className='cardFormat textFormatForCard'>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
                        <Card.Body>
                          <Card.Title>React</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary" 
                          href="https://www.freecodecamp.org/learn/front-end-development-libraries/#react"
                          target="_blank"
                          >
                            Click to learn React
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card className='cardFormat textFormatForCard'>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" />
                        <Card.Body>
                          <Card.Title>Bootstrap</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary" 
                          href="https://www.freecodecamp.org/learn/front-end-development-libraries/#bootstrap"
                          target="_blank"
                          >
                            Click to learn Bootstrap
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    </Row>
                </Container>
    );
  }
  
  const GaugeBars = () => 
  {
    return(
      <>
      <p className='AsOfDate'>As of <span className='EMPHASISDATE'>December 28, 2022</span></p>
      <span className='gaugeTitle'>CSS</span>
      <ProgressBar striped animated variant="info" now={nowCSS} label={`${nowCSS}%`} /><br/>

      <span className='gaugeTitle'>Java</span>
      <ProgressBar striped animated variant="info" now={nowJava} label={`${nowJava}%`} /><br/>

      <span className='gaugeTitle'>Spring Boot</span>
      <ProgressBar striped animated variant="info" now={nowSpringBoot} label={`${nowSpringBoot}%`} /><br/>

      <span className='gaugeTitle'>C++</span>
      <ProgressBar striped animated variant="info" now={nowCPlusPlus} label={`${nowCPlusPlus}%`} /><br/>

      <span className='gaugeTitle'>React</span>
      <ProgressBar striped animated variant="info" now={nowReact} label={`${nowReact}%`} /><br/>

      <span className='gaugeTitle'>Bootstrap</span>
      <ProgressBar striped animated variant="info" now={nowBootstrap} label={`${nowBootstrap}%`} /></>
    );
  }

  const SkillTraits = () =>{
    return (
      <ul>
        <li><h3>Very Fluent in English</h3><p>I can speak and write in English proficiently</p></li>
        <li><h3>Team Oriented, but can also work solo if needed</h3><p>I love having company in doing anything</p></li>
        <li><h3>Easily adaptable</h3><p>Adaptable in environments and athmospheres</p></li>
      </ul>
    );
  }

  const EducationalBackground = () =>{
    return (
      <ul>
         <li><h3>Mapua University</h3><p>Batchelor of Science in Information Technology (2016-2022)</p></li>
         <li><h3>De La Salle University</h3><p>Batchelor of Science in Civil Engineering (2014-2016)</p></li>
         <li><h3>Colegio San Agustin - Makati</h3><p>Grade 6 to High School (2008-2014)</p></li>
       </ul>
    );
  }

  const AccordionAboutMe = () =>{
    return (
      <h1 className="navBarCenterText aboutMePadding">About Me</h1>
      <Accordion defaultActiveKey="0" id="aboutMe">

              <Accordion.Item eventKey="0">
                <Accordion.Header>{accordionTitle1}</Accordion.Header>
                <Accordion.Body className='AccordionFormat'>
                <p align="center"><SkillsetCards/></p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>{accordionTitle2}</Accordion.Header>
                <Accordion.Body className='AccordionFormat'>
                  <GaugeBars/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>{accordionTitle3}</Accordion.Header>
                <Accordion.Body className='AccordionFormat'>
                  <EducationalBackground/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>{accordionTitle4}</Accordion.Header>
                <Accordion.Body className='AccordionFormat'>
                  <SkillTraits/>
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>
    );
  }

  const footerNotes = <footer><p className="footerFormat">Jerome Regalado &#169; 2022</p></footer>;
  
  return (
    <div className="App">

        <NavBar/>

        <body className="mainpage">

          <section id="home">
            <MainCarousel/>
          </section>

          <section id="aboutMe">
            <AccordionAboutMe/>
          </section>

          <section id="contactMe">
            <ContactMeForm/>
          </section>
          
          {footerNotes}
      </body>
    </div>
  );
}

export default App;
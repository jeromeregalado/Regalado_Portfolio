import './App.css';
import React from 'react';
import { Carousel, Nav, Navbar, Container, Offcanvas, Button, Accordion, Figure, Form, ProgressBar, Alert,Card, onClickOpenVacancy, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() 
{
  const nowCSS = 70;
  const nowJava = 80;
  const nowSpringBoot = 70;
  const nowCPlusPlus = 70;
  const nowReact = 60;
  const nowBootstrap = 60;
  return (
    <div className="App">
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
                      <Nav.Link className="nav-links" href="#home">Home</Nav.Link>
                      <Nav.Link className="nav-links" href="#AboutMe">About Me</Nav.Link>
                      <Nav.Link className="nav-links" href="#ContactMe">Contact Me</Nav.Link>
                    </Nav>
              </Offcanvas.Body>
              </Navbar.Offcanvas>
          </Container>
        </Navbar>


        <body className="mainpage">

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

          <h1 className="navBarCenterText">About Me</h1>

            <Accordion defaultActiveKey="0">

              <Accordion.Item eventKey="0">
                <Accordion.Header>My Current Programming Language Skillset</Accordion.Header>
                <Accordion.Body>
                  <p align="center">    
                  {/* <Figure>
                  <img className="progIcons" alt="CSSimg"
                  src="https://ostraining.com/wp-content/uploads/coding/html5-css3-hd.jpg"
                  />
                <Figure.Caption>
                <p align="center"><h3>CSS</h3></p>
                </Figure.Caption>
                </Figure>
                <Figure>
                  <img className="progIcons" alt="JAVAimg"
                  src="https://www.developer.com/wp-content/uploads/2021/09/Java-tutorials.jpg"
                  />
                <Figure.Caption>
                <p align="center"><h3>Java</h3></p>
                </Figure.Caption>
                </Figure>
                <Figure>
                  <img className="progIcons" alt="SPRINGBOOTimg"
                  src="data:image/png;base64,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"
                  />
                <Figure.Caption>
                <p align="center"><h3>Spring Boot</h3></p>
                </Figure.Caption>
                </Figure>
                <Figure>
                  <img className="progIcons" alt="C++img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png"
                  />
                <Figure.Caption>
                <p align="center"><h3>C++</h3></p>
                </Figure.Caption>
                </Figure>
                <Figure>
                  <img className="progIcons" alt="REACTimg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  />
                <Figure.Caption>
                <p align="center"><h3>React</h3></p>
                </Figure.Caption>
                </Figure>
                <Figure>
                  <img className="progIcons" alt="BOOTSTRAPimg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
                  />
                <Figure.Caption>
                <p align="center"><h3>Bootstrap</h3></p>
                </Figure.Caption>
                </Figure> */}
                <Container>
                    <Row>
                    <Col>
                      <Card className='cardFormat'>
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
                      <Card className='cardFormat'>
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
                      <Card className='cardFormat'>
                        <Card.Img variant="top" src="data:image/png;base64,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" />
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
                    </Row>

                    <Row>
                    <Col>
                      <Card className='cardFormat'>
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
                      <Card className='cardFormat'>
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
                      <Card className='cardFormat'>
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
                </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>My Gauge in my skillset</Accordion.Header>
                <Accordion.Body>
                  <p className='AsOfDate'>As of <span className='EMPHASISDATE'>December 28, 2022</span></p>
                  <span className='gaugeTitle'>CSS</span>
                  <ProgressBar striped animated variant="info" now={nowCSS} label={`${nowCSS}%`}/>

                  <span className='gaugeTitle'>Java</span>
                  <ProgressBar striped animated variant="info" now={nowJava} label={`${nowJava}%`}/>

                  <span className='gaugeTitle'>Spring Boot</span>
                  <ProgressBar striped animated variant="info" now={nowSpringBoot} label={`${nowSpringBoot}%`}/>

                  <span className='gaugeTitle'>C++</span>
                  <ProgressBar striped animated variant="info" now={nowCPlusPlus} label={`${nowCPlusPlus}%`}/>

                  <span className='gaugeTitle'>React</span>
                  <ProgressBar striped animated variant="info" now={nowReact} label={`${nowReact}%`}/>

                  <span className='gaugeTitle'>Bootstrap</span>
                  <ProgressBar striped animated variant="info" now={nowBootstrap} label={`${nowBootstrap}%`}/>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>My Educational Background</Accordion.Header>
                <Accordion.Body>
                  <ul>
                  <li><h3>Mapua University</h3><p>Batchelor of Science in Information Technology (2016-2022)</p></li>
                  <li><h3>De La Salle University</h3><p>Batchelor of Science in Civil Engineering (2014-2016)</p></li>
                  <li><h3>Colegio San Agustin - Makati</h3><p>Grade 6 to High School (2008-2014)</p></li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>My Other Traits</Accordion.Header>
                <Accordion.Body>
                  <ul>
                  <li><h3>Very Fluent in English</h3><p>I can speak and write in English proficiently</p></li>
                  <li><h3>Team Oriented, but can also work solo if needed</h3><p>I love having company in doing anything</p></li>
                  <li><h3>Easily adaptable</h3><p>Adaptable in environments and athmospheres</p></li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>

          <h1 className="navBarCenterText">Contact Me</h1>
            <Accordion>
              <Accordion.Item eventKey="0">
              <Accordion.Header>Open Form</Accordion.Header>
              <Accordion.Body>
              <Form>
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

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
            </Form>
              </Accordion.Body>
              </Accordion.Item>
            </Accordion>

      </body>
    </div>
  );
}

export default App;
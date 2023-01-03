import React from "react";
import {Button, Accordion, ProgressBar, Card, Row, Col, Container} from 'react-bootstrap';

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
const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


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
      <p className='AsOfDate'>As of <span className='EMPHASISDATE'>{date}</span></p>
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
      <Accordion defaultActiveKey="0">

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

export default AccordionAboutMe
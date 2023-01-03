import React from "react";
import {Button, Accordion, Card, Row, Col, Container} from 'react-bootstrap';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import CSSimg from '../Images/CSSimg.png';
import JavaImg from '../Images/JavaImg.jpg';
import SpringBootImg from '../Images/SpringBootImg.png';
import ReactImg from '../Images/ReactImg.png';
import BootstrapImg from '../Images/BootstrapImg.png';
import CPPImg from '../Images/CPlusPlusImg.png';

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
                        <Card.Img variant="top" src={CSSimg} className="cardImg" />
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
                        <Card.Img variant="top" src={JavaImg} className="cardImg"/>
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
                        <Card.Img variant="top" src={SpringBootImg} className="cardImg"/>
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
                        <Card.Img variant="top" src={CPPImg} className="cardImg"/>
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
                        <Card.Img variant="top" src={ReactImg} className="cardImg"/>
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
                        <Card.Img variant="top" src={BootstrapImg} className="cardImg"/>
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
      <div>
      <p className='AsOfDate'>As of <span className='EMPHASISDATE'>{date}</span></p>
      <p align="center">
      <Row>
      <Col>
      <div style={{ width: 200, height: 200 }}>
      <span className='gaugeTitle'>CSS</span>
      <CircularProgressbar value={nowCSS} text={`${nowCSS}%`} />
      </div>
      </Col>

      <Col>
      <div style={{ width: 200, height: 200 }}>
      <span className='gaugeTitle'>Java</span>
      <CircularProgressbar value={nowJava} text={`${nowJava}%`} />
      </div>
      </Col>

      <Col>
      <div style={{ width: 200, height: 200 }}>
      <span className='gaugeTitle'>Spring Boot</span>
      <CircularProgressbar value={nowSpringBoot} text={`${nowSpringBoot}%`} />
      </div>
      </Col>
      </Row>
      <br/>
      <br/>

      <Row>
      <Col>
      <div style={{ width: 200, height: 200 }}>
      <span className='gaugeTitle'>C++</span>
      <CircularProgressbar value={nowCPlusPlus} text={`${nowCPlusPlus}%`} />
      </div>
      </Col>

      <Col>
      <div style={{ width: 200, height: 200 }}>
      <span className='gaugeTitle'>React</span>
      <CircularProgressbar value={nowReact} text={`${nowReact}%`} />
      </div>
      </Col>

      <Col>
      <div style={{ width: 200, height: 200 }}>
        <span className='gaugeTitle'>Bootstrap</span>
        <CircularProgressbar value={nowBootstrap} text={`${nowBootstrap}%`} />
      </div>
      </Col>
      </Row>
      <br/>
      </p>
      </div>
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
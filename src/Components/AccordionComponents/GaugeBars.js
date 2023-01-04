import React from "react";
import { CircularProgressbar} from "react-circular-progressbar";
import { Row, Col } from "react-bootstrap";

const nowCSS = 70;
const nowJava = 80;
const nowSpringBoot = 70;
const nowCPlusPlus = 70;
const nowReact = 60;
const nowBootstrap = 60;

const GaugeBars = () => 
{
  return(
    <div>
    <p align="center">
    <Row>
    <Col>
    <div style={{ width: 200, height: 200,}}>
    <p className='gaugeTitle'>CSS</p>
    <CircularProgressbar value={nowCSS} text={`${nowCSS}%`} />
    </div>
    </Col>

    <Col>
    <div style={{ width: 200, height: 200,}}>
    <p className='gaugeTitle'>Java</p>
    <CircularProgressbar value={nowJava} text={`${nowJava}%`} />
    </div>
    </Col>

    <Col>
    <div style={{ width: 200, height: 200,}}>
    <p className='gaugeTitle'>Spring Boot</p>
    <CircularProgressbar value={nowSpringBoot} text={`${nowSpringBoot}%`} />
    </div>
    </Col>
    </Row>
    <br/><br/><br/>
    <Row>
    <Col>
    <div style={{ width: 200, height: 200,}}>
    <p className='gaugeTitle'>C++</p>
    <CircularProgressbar value={nowCPlusPlus} text={`${nowCPlusPlus}%`} />
    </div>
    </Col>

    <Col>
    <div style={{ width: 200, height: 200,}}>
    <p className='gaugeTitle'>React</p>
    <CircularProgressbar value={nowReact} text={`${nowReact}%`} />
    </div>
    </Col>

    <Col>
    <div style={{ width: 200, height: 200,}}>
      <p className='gaugeTitle'>Bootstrap</p>
      <CircularProgressbar value={nowBootstrap} text={`${nowBootstrap}%`} />
    </div>
    </Col>
    </Row>
    <br/><br/>
    </p>
    </div>
  );
}

export default GaugeBars;
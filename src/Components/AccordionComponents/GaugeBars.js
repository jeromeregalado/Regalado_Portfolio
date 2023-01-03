import React from "react";
import { CircularProgressbar} from "react-circular-progressbar";
import { Row, Col } from "react-bootstrap";

const nowCSS = 70;
const nowJava = 80;
const nowSpringBoot = 70;
const nowCPlusPlus = 70;
const nowReact = 60;
const nowBootstrap = 60;
const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

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

export default GaugeBars;
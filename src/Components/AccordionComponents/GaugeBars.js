import React from "react";
import { CircularProgressbarWithChildren} from "react-circular-progressbar";
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
    <CircularProgressbarWithChildren value={nowCSS} text={`${nowCSS}%`}><p className="paddingforGaugeTitle gaugeTitle">CSS</p></CircularProgressbarWithChildren>
    </div>
    </Col>

    <Col>
    <div style={{ width: 200, height: 200,}}>
    <CircularProgressbarWithChildren value={nowJava} text={`${nowJava}%`}><p className="paddingforGaugeTitle gaugeTitle">Java</p></CircularProgressbarWithChildren>
    </div>
    </Col>

    <Col>
    <div style={{ width: 200, height: 200,}}>
    <CircularProgressbarWithChildren value={nowSpringBoot} text={`${nowSpringBoot}%`}><p className="paddingforGaugeTitle gaugeTitle">Spring Boot</p></CircularProgressbarWithChildren>
    </div>
    </Col>
    </Row>
    <br/><br/><br/>
    <Row>
    <Col>
    <div style={{ width: 200, height: 200,}}>
    <CircularProgressbarWithChildren value={nowCPlusPlus} text={`${nowCPlusPlus}%`}><p className="paddingforGaugeTitle gaugeTitle">C++</p></CircularProgressbarWithChildren>
    </div>
    </Col>

    <Col>
    <div style={{ width: 200, height: 200,}}>
    <CircularProgressbarWithChildren value={nowReact} text={`${nowReact}%`}><p className="paddingforGaugeTitle gaugeTitle">React</p></CircularProgressbarWithChildren>
    </div>
    </Col>

    <Col>
    <div style={{ width: 200, height: 200,}}>
      <CircularProgressbarWithChildren value={nowBootstrap} text={`${nowBootstrap}%`}><p className="paddingforGaugeTitle gaugeTitle">Bootstrap</p></CircularProgressbarWithChildren>
    </div>
    </Col>
    </Row>
    <br/><br/>
    </p>
    </div>
  );
}

export default GaugeBars;
import React from "react";
import {Accordion} from 'react-bootstrap';
import 'react-circular-progressbar/dist/styles.css';
import SkillsetCards from "./AccordionComponents/SkillsetCards";
import GaugeBars from "./AccordionComponents/GaugeBars";
const accordionTitle1 = "My Current Programming Language Skillset";
const accordionTitle2 = "My Gauge in my skillset";
const accordionTitle3 = "My Educational Background";
const accordionTitle4 = "My Other Traits";

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
import React from "react";
import { Card } from "react-bootstrap";
import CSSimg from '../../Images/CSSimg.png';
import JavaImg from '../../Images/JavaImg.jpg';
import SpringBootImg from '../../Images/SpringBootImg.png';
import ReactImg from '../../Images/ReactImg.png';
import CPPimg from '../../Images/CPlusPlusImg.png'
import BootstrapImg from '../../Images/BootstrapImg.png';
const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

const SkillsetCards = () =>{
    const CardInfo =[
        {image:CSSimg, title: "CSS"},
        {image:JavaImg, title: "Java"},
        {image:SpringBootImg, title: "Spring Boot"},
        {image:CPPimg, title: "C++"},
        {image:ReactImg, title: "React"},
        {image:BootstrapImg, title: "Bootstrap"}
    ]
    
    const renderCard = (card, index) => {
        return(
            <Card key={index} className='cardFormat textFormatForCard box'>
               <Card.Img variant="top" src={card.image} className="cardImg m-auto"/>
                    <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    </Card.Body>
            </Card>
        );
    }

    return(
      <>
      <p className='AsOfDate'>As of <span className='EMPHASISDATE'>{date}</span></p>
      <div className="grid">{CardInfo.map(renderCard)}</div>
      </>
    );
  }

  export default SkillsetCards;
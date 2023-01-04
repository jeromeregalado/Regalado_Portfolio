import React from "react";
import { Card } from "react-bootstrap";
import CSSimg from '../../Images/CSSimg.png';
import JavaImg from '../../Images/JavaImg.jpg';
import SpringBootImg from '../../Images/SpringBootImg.png';
import ReactImg from '../../Images/ReactImg.png';
import CPPimg from '../../Images/CPlusPlusImg.png'
import BootstrapImg from '../../Images/BootstrapImg.png';

const SkillsetCards = () =>{
    const CardInfo =[
        {image:CSSimg, title: "CSS", text: "Random Text"},
        {image:JavaImg, title: "Java", text: "Random Text"},
        {image:SpringBootImg, title: "Spring Boot", text: "Random Text"},
        {image:CPPimg, title: "C++", text: "Random Text"},
        {image:ReactImg, title: "React", text: "Random Text"},
        {image:BootstrapImg, title: "Bootstrap", text: "Random Text"}
    ]
    
    const renderCard = (card, index) => {
        return(
            <Card key={index} className='cardFormat textFormatForCard box'>
               <Card.Img variant="top" src={card.image} className="cardImg center"/>
                    <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                    </Card.Body>
            </Card>
        );
    }

    return(
      <div className="grid">{CardInfo.map(renderCard)}</div>
    );
  }

  export default SkillsetCards;
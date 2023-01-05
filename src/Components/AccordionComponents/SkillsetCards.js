import React from "react";
import { Card } from "react-bootstrap";
import { CircularProgressbarWithChildren} from "react-circular-progressbar";
import CSSimg from '../../Images/CSSimg.png';
import JavaImg from '../../Images/JavaImg.jpg';
import SpringBootImg from '../../Images/SpringBootImg.png';
import ReactImg from '../../Images/ReactImg.png';
import CPPimg from '../../Images/CPlusPlusImg.png'
import BootstrapImg from '../../Images/BootstrapImg.png';
import "react-circular-progressbar/dist/styles.css";
const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

const SkillsetCards = () =>{
    const CardInfo =[
        {image:CSSimg, title: "CSS", performance:"60"},
        {image:JavaImg, title: "Java", performance:"80"},
        {image:SpringBootImg, title: "Spring Boot", performance:"70"},
        {image:CPPimg, title: "C++", performance:"70"},
        {image:ReactImg, title: "React", performance:"60"},
        {image:BootstrapImg, title: "Bootstrap", performance:"60"}
    ]
    
    const renderCard = (card, index) => {
        return(
            <Card key={index} className='cardFormat textFormatForCard box'>
                 <Card.Img variant="top" src={card.image} className="cardImg m-auto pt-2"/>
                    <Card.Body>
                    <div style={{padding: "20px 20px 20px 20px",maxHeight:200,maxWidth:200}}>
                            <CircularProgressbarWithChildren value={card.performance} text={`${card.performance}%`}>
                            <p className="gaugeTitle paddingforGaugeTitle">{card.title}</p>
                            </CircularProgressbarWithChildren>
                    </div>
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
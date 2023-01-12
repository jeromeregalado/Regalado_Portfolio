import React from "react";
import { Card, Container } from "react-bootstrap";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import CSSimg from '../../Images/CSSimg.png';
import JavaImg from '../../Images/JavaImg.jpg';
import SpringBootImg from '../../Images/SpringBootImg.png';
import ReactImg from '../../Images/ReactImg.png';
import CPPimg from '../../Images/CPlusPlusImg.png'
import BootstrapImg from '../../Images/BootstrapImg.png';
import CSharpImg from '../../Images/CSharpImg.png';
import HTMLImg from '../../Images/HTML.png';
import "react-circular-progressbar/dist/styles.css";
const current = new Date();
const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

const SkillsetCards = () => {
    const CardInfo = [
        { image: CSSimg, title: "CSS", performance: "60" },
        { image: JavaImg, title: "Java", performance: "80" },
        { image: SpringBootImg, title: "Spring Boot", performance: "70" },
        { image: CPPimg, title: "C++", performance: "70" },
        { image: ReactImg, title: "React", performance: "60" },
        { image: BootstrapImg, title: "Bootstrap", performance: "60" },
        { image: CSharpImg, title: "C#", performance: "50" },
        { image: HTMLImg, title: "HTML", performance: "70" }
    ]

    const renderCard = (card, index) => {
        return (
            <Card key={index} className='cardFormat textFormatForCard'>
                <Card.Img variant="top" src={card.image} className="cardImg m-auto" />
                <Card.Body>
                    <div style={{ margin: "10px 10px 10px 10px", minHeight: 100, minWidth: 100, maxHeight: 170, maxWidth: 170, padding: "25px 25px" }}>
                        <CircularProgressbarWithChildren value={card.performance} text={`${card.performance}%`}>
                            <p className="gaugeTitle paddingforGaugeTitle">{card.title}</p>
                        </CircularProgressbarWithChildren>
                    </div>
                </Card.Body>
            </Card>
        );
    }

    return (
        <Container>
            <p className='AsOfDate'>As of <span className='EMPHASISDATE'>{date}</span></p>
            <div className="grid">{CardInfo.map(renderCard)}</div>
        </Container>
    );
}

export default SkillsetCards;
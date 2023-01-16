import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import SBImg from '../Images/SpringBootImg.png'
import ReactImg from '../Images/ReactImg.png'

const Projects = () => {

  const ProjectInfo = [
    { image: SBImg, title: "CSV Academy Project Simulation", link: "https://github.com/csv-academy-batch2/mjolnir-team", desc: "A project made with the intention of simulating the bootcampers with a sandbox project. Spring Boot and Postgres were used in this project"},
    { image: SBImg, title: "Mini Project CSV Academy", link: "https://github.com/jeromeregalado/MiniProjectGroup5", desc: "A mini project tasked by the instructors on creating an backend project. Group consisted of Jojo Hipolito, Eshant Manghnani and yours truly" },
    { image: ReactImg, title: "Current Portfolio Page", link: "https://github.com/jeromeregalado/MiniProjectGroup5", desc: "This current page that you're looking at. Hello! This is my code for my page" }
  ]

  const renderProjectCard = (card, index) => {
    return (
      <Col xs lg="3">
        <Card style={{ width: '30rem' }} className='projCardFormat textFormatForCard bg-white box2'>
          <a href={card.link} target="_blank" rel="noreferrer" className='center m-auto'><Card.Img variant="top" src={card.image} className="projImg" /></a>
          <Card.Body className='text-center'>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
              {card.desc }
            </Card.Text>
            <Button variant="primary" href={card.link} target="_blank" rel="noreferrer">Go to project</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  return (
    <div className="section paddingForContact">
      <Container fluid><Row className='m-auto p-auto'>{ProjectInfo.map(renderProjectCard)}</Row></Container>
    </div>
  );
}

export default Projects
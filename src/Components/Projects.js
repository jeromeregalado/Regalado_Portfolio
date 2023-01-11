import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import SBImg from '../Images/SpringBootImg.png'

const Projects = () => {

  const ProjectInfo = [
    { image: SBImg, title: "CSV Academy Project Simulation", link: "https://github.com/csv-academy-batch2/mjolnir-team" },
    { image: SBImg, title: "Mini Project CSV Academy", link: "https://github.com/jeromeregalado/MiniProjectGroup5" }
  ]

  const renderProjectCard = (card, index) => {
    return (
      <Col>
        <Card style={{ width: '30rem' }} className='projCardFormat textFormatForCard bg-white box2'>
          <a href={card.link} target="_blank" className='center m-auto'><Card.Img variant="top" src={card.image} className="projImg" /></a>
          <Card.Body className='text-center'>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" href={card.link} target="_blank">Go to project</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  return (
    <div className="section paddingForContact">
      <h1 className="navBarCenterText aboutMePadding">Projects</h1>
      <Container className='center'><Row>{ProjectInfo.map(renderProjectCard)}</Row></Container>
    </div>
  );
}

export default Projects
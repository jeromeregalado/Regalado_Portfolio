import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import SBImg from '../Images/SpringBootImg.png'

const Projects = () => {
  
    const ProjectInfo =[
      {image:SBImg, title: "CSV Academy Project Simulation", link:"https://github.com/csv-academy-batch2/mjolnir-team"},
      {image:SBImg, title: "Mini Project CSV Academy", link:"https://github.com/jeromeregalado/MiniProjectGroup5"}
  ]
  
  const renderProjectCard = (card, index) => {
      return(
        <Card style={{ width: '18rem', margin:3 }} className='cardFormat textFormatForCard box'>
            <a href={card.link} target="_blank" className='center'><Card.Img variant="top" src={card.image} className=""/></a>
            <Card.Body className='text-center'>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary" href={card.link} target="_blank">Go to project</Button>
            </Card.Body>
            </Card>
      );
  }

  return(
    <div className="section paddingForContact">
      <h1 className="navBarCenterText">Projects</h1>
      <Container><div className="grid2">{ProjectInfo.map(renderProjectCard)}</div></Container>
      </div>
  );
}

export default Projects
import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import SBImg from '../Images/SpringBootImg.png'
import ReactImg from '../Images/ReactImg.png'

const Projects = () => {

  const ProjectInfo = [
<<<<<<< HEAD
    { image: SBImg, title: "CSV Academy Project Simulation", link: "https://github.com/csv-academy-batch2/mjolnir-team", desc: "A project made with the intention of simulating the bootcampers with a sandbox project. Spring Boot and Postgres were used in this project"},
    { image: SBImg, title: "Mini Project CSV Academy", link: "https://github.com/jeromeregalado/MiniProjectGroup5", desc: "A mini project tasked by the instructors on creating an backend project. Group consisted of Jojo Hipolito, Eshant Manghnani and yours truly" },
    { image: ReactImg, title: "Current Portfolio Page", link: "https://github.com/jeromeregalado/Regalado_Portfolio", desc: "This current page that you're looking at. Hello! This is my code for my page" }
=======
    { image: SBImg, title: "CSV Academy Project Simulation", link: "https://github.com/csv-academy-batch2/mjolnir-team", desc: "A project made with the intention of simulating the bootcampers with a sandbox project. Group consisted of John Michael Flores, Alex John Mataac, Eshant Manghnani, Justin Morales, and yours truly.", components: "Spring Boot, Postgres, Azure DevOps"},
    { image: SBImg, title: "Mini Project CSV Academy", link: "https://github.com/jeromeregalado/MiniProjectGroup5", desc: "A mini project tasked by the instructors on creating an backend project. Group consisted of Jojo Hipolito, Eshant Manghnani and yours truly" , components: "Spring Boot, H2-console, Swagger"},
    { image: ReactImg, title: "Current Portfolio Page", link: "https://github.com/jeromeregalado/MiniProjectGroup5", desc: "This current page that you're looking at. Hello! This is my code for my page", components: "ReactJS, Bootstrap, React-Bootstrap"}
>>>>>>> 5e7361ce6b83ad89d9dc8abe19216d69614884c9
  ]

  const renderProjectCard = (card, index) => {
    return (
      <Col xs lg="3">
<<<<<<< HEAD
        <Card style={{ width: '20rem' }} className='projCardFormat textFormatForCard bg-white box2'>
=======
        <Card style={{ width: '28rem' }} className='projCardFormat textFormatForCard bg-white box2'>
>>>>>>> 5e7361ce6b83ad89d9dc8abe19216d69614884c9
          <a href={card.link} target="_blank" rel="noreferrer" className='center m-auto'><Card.Img variant="top" src={card.image} className="projImg" /></a>
          <Card.Body className='text-center'>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
              {card.desc}
            </Card.Text>
            <Card.Text>
              Components used: {card.components}
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
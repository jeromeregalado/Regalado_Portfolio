import './App.css';
import React from 'react';
import {Button, Accordion, Form, ProgressBar, Alert,Card, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainCarousel from './Components/MainCarousel';
import NavBar from './Components/NavBar';
import AccordionAboutMe from './Components/AccordionAboutMe';



function App() 
{

  const ContactMeForm = () =>{
    return(
      <Form className='formFormat'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" required/>
                      <Form.Text className="text-muted">
                        I'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="number" placeholder="Enter phone number" required/>
                      <Form.Text className="text-muted">
                        Don't worry, I'll never share your number with anyone else either.
                      </Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formQuestion">
                      <Form.Label>Question</Form.Label>
                      <Form.Control type="text" placeholder="Your Question for me" required/>
                      <Form.Text className="text-muted">
                        It can be anything, ranging from "How are you today", to anything political I guess LOL.
                      </Form.Text>
                      <Alert variant="primary">
                      <Alert.Heading>Just a quick reminder!</Alert.Heading>
                      <p>
                        Just don't be a weirdo XD LMAO
                      </p>
                      </Alert>
                    </Form.Group>

                    <center>
                    <div className="d-grid gap-2">
                      <Button variant="primary" type="submit" size='lg'>
                        Submit
                      </Button>
                    </div>
                    </center>
            </Form>
    );
  }




  
  return (
    <div className="App">

        <NavBar/>

        <body className="mainpage">

          <section id="home">
            <MainCarousel/>
          </section>

          <section id="aboutMe">
            <h1 className="navBarCenterText aboutMePadding">About Me</h1>
            <AccordionAboutMe/>
          </section>

          <section id="contactMe">
            <h1 className="navBarCenterText">Contact Me</h1>
            <ContactMeForm/>
          </section>
          
          <footer><p className="footerFormat">Jerome Regalado &#169; {new Date().getFullYear()}</p></footer>
        </body>
    </div>
  );
}

export default App;
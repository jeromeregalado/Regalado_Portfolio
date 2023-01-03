import React from "react";
import {Button, Form, Alert} from 'react-bootstrap';

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

export default ContactMeForm;
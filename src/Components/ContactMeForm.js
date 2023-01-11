import React from "react";
import { Button, Form, Alert, Row, Col, Container } from 'react-bootstrap';

const ContactMeForm = () => {
  return (
    <div className="section paddingForContact">
      <Container>
        <h1 className="navBarCenterText">Contact Me</h1>


        <Form className='formFormat' action="https://getform.io/f/325d8b9e-e78e-42ec-afae-6e9ab3501a67" method="POST">
          <Row>
            <Form.Group className="mb-3 paddingEmail" controlId="formBasicEmail" as={Col} md="6">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="E-Mail" required />
              <Form.Text className="text-white">
                I'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhoneNumber" as={Col} md="6">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" name="Number" required />
              <Form.Text className="text-white">
                Don't worry, I'll never share your number with anyone else either.
              </Form.Text>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formQuestion" >
            <Form.Label>Question</Form.Label>
            <Form.Control as="textarea" placeholder="Your Question for me" name="Question" required rows={4} />
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
      </Container>
    </div>
  );
}

export default ContactMeForm;
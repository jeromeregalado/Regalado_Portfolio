import React from 'react';
import { Container } from 'react-bootstrap';
import { Facebook, Github, Instagram, Mailbox } from 'react-bootstrap-icons';

const FooterNavBar = () => {
  return (
    <footer className='text-center text-white fixed-bottom colorForFooter'>
      <Container className='pt-4'>
          <a href="#!"><Facebook size={30} className="mx-3"/></a>
          <a href="#!"><Instagram size={30} className="mx-3"/></a>
          <a href="#!"><Github size={30} className="mx-3"/></a>
          <a href="#!"><Mailbox size={30} className="mx-3"/></a>
          <p className="footerFormat">Jerome Regalado &#169; {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
}

export default FooterNavBar
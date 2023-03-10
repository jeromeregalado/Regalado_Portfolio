import React from 'react';
import { Container } from 'react-bootstrap';
import { Facebook, Github, Instagram, Mailbox } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons/dist';

const FooterNavBar = () => {
  return (
    <footer className='text-center text-white fixed-bottom colorForFooter'>
      <Container className='pt-3'>
        <a href="https://www.facebook.com/jrmrgldo" target="_blank" rel='noreferrer' className='linkFormat'><Facebook size={30} className="mx-3" /></a>
        <a href="https://www.instagram.com/jerpyyy/" target="_blank" rel='noreferrer' className='linkFormat'><Instagram size={30} className="mx-3" /></a>
        <a href="https://github.com/jeromeregalado" target="_blank" rel='noreferrer' className='linkFormat'><Github size={30} className="mx-3" /></a>
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=jerome.regalado@softvision.com&su=&body=&tf=cm" target="_blank" rel='noreferrer' className='linkFormat'><Mailbox size={30} className="mx-3" /></a>
        <a href='https://ph.linkedin.com/in/jerome-regalado-83306b172'target="_blank" rel='noreferrer' className='linkFormat'><Linkedin size={30} className='mx-3'/></a>
        <p className="footerFormat">Jerome Regalado &#169; {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
}

export default FooterNavBar
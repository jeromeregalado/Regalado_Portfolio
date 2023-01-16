import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Facebook, Github, Instagram, Mailbox } from 'react-bootstrap-icons';
const FooterNavBar = () => {
  return (
    <footer className='text-left text-white flex-column gap-3 sticky-lg-bottom'>
        <a href="https://www.facebook.com/jrmrgldo" target="_blank"><Facebook size={30} /></a>
        <a href="https://www.instagram.com/jerpyyy/" target="_blank"><Instagram size={30} /></a>
        <a href="https://github.com/jeromeregalado" target="_blank"><Github size={30} /></a>
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=jerome.regalado@softvision.com&su=&body=&tf=cm" target="_blank"><Mailbox size={30} /></a>
    </footer>
  );
}

export default FooterNavBar
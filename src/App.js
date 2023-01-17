import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainCarousel from './Components/MainCarousel';
import NavBar from './Components/NavBarComponents/NavBar';
import AccordionAboutMe from './Components/AccordionAboutMe';
import ContactMeForm from './Components/ContactMeForm';
import Projects from './Components/Projects';
import FooterNavBar from './Components/NavBarComponents/FooterNavBar';

function App() 
{
  return (
    <div className="App">

        <NavBar/>

        <body className="mainpage">

          <section id="home">
            <MainCarousel/>
          </section>

          <section id="aboutMe">
            <AccordionAboutMe/>
          </section>

          <section id="projects">
            <Projects/>
          </section>

          <section id="contactMe">
            <ContactMeForm/>
          </section>
          <FooterNavBar/>
        </body>
    </div>
  );
}

export default App;
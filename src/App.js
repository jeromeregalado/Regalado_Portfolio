import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainCarousel from './Components/MainCarousel';
import NavBar from './Components/NavBar';
import AccordionAboutMe from './Components/AccordionAboutMe';
import ContactMeForm from './Components/ContactMeForm';
import Projects from './Components/Projects';

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

          <footer><p className="footerFormat">Jerome Regalado &#169; {new Date().getFullYear()}</p></footer>
        </body>
    </div>
  );
}

export default App;
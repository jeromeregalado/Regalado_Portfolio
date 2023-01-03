import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainCarousel from './Components/MainCarousel';
import NavBar from './Components/NavBar';
import AccordionAboutMe from './Components/AccordionAboutMe';
import ContactMeForm from './Components/ContactMeForm';



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
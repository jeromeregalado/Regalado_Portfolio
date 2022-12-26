import logo from './logo.png';
import './App.css';
import React from 'react';
import Typewriter from "typewriter-effect";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() 
{
  return (
    <div className="App">
      <body className="mainpage">
      <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Hello</h1>
          <p>I'm Jerome </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>I'm a Software Engineer </h1>
          <p>I work for Cognizant Softvision / Magenic</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>It's a pleasure seeing you look at my website</h1>
          <p>
            Hope you like my aesthetics.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



        Hi, I'm Jerome. 
        <br/>
        I am a Junior Software Engineer working at Cognizant Softvision / Magenic
        <br/>
        It's a pleasure to see your beautiful self. I love playing apex legends. 
      </body>
    </div>
  );
}

export default App;

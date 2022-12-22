import logo from './logo.png';
import './App.css';
import React from 'react';
import Typewriter from "typewriter-effect";

function App() 
{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Loading 
          <Typewriter 
          onInit=
          {(typewriter)=> 
            { 
            typewriter
            .typeString(".")
            .pauseFor(1000)
            .typeString(" .")
            .pauseFor(1000)
            .typeString(" .")
            .deleteAll()
            .typeString(" .")
            .pauseFor(1000)
            .typeString(" .")
            .pauseFor(1000)
            .typeString(" .")
            .start();
            }
          } 
          />
        </p>
          Redirecting you to Jerome's portfolio
      </header>
      <body class="mainpage">
        Hi, I'm Jerome. 
        <br></br>
        I am a Junior Software Engineer working at Cognizant Softvision / Magenic
        <br></br>
        It's a pleasure to see your beautiful self. I love playing apex legends. 
      </body>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import Tabs from "./components/Tabs";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './UIKit.css';

function App() {

  return (
    <div className="App">
      { <header className="App-header">
        <h1>Rhodri Rees</h1>
        <h3>B.Sc Computer Science</h3>
        <div class="Contact">
        <div className="Contact-left">
        <h3>rhodriarees@gmail.com</h3>
        <h3>(+44) 07380-321-911</h3>
        <h3>Cardiff, Wales</h3>
        </div>
        <div className="Contact-right">
        <h3>Linkedin</h3>
        <h3>Github</h3>
        <h3>Itch.io</h3>
        </div>
        
      </div>
      <a class="btn btn-primary" href='/CV.pdf' download  data-aos="zoom-in" data-aos-anchor="data-aos-anchor">Download CV</a>
      </header>}

      

      <Tabs>
        <div label="Games">
          <Slide duration={100000} canSwipe={false} indicators={true} transitionDuration={500} slidesToShow={2}>
            <div className="each-slide-effect">
              <center>
              <div className="image-container">
              <img src={require('./assets/Collide.png')} alt="Collide" />
              </div>
              </center>
              <h2>Worlds Collide</h2>
              <h3>Puzzle Game</h3>
            </div>
            <div className="each-slide-effect">
              <center>
              <div className="image-container">
              <img src={require('./assets/space2.jpg')} alt="Collide" />
              </div>
              </center>
            </div>
          </Slide>
          
        </div>
        <div label="Croc">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>

      <div class='App-container'>
        <div className="App-left">
          <h2> About Me</h2>
          <p>
          Third year computing science student with a wide variety of experience 
both academic and extracurricular now looking to gain real world skill. 
Tenacious, creative, and self-motivated. Passionate about cyber security 
and human-computer interaction. Strong problem solving skills with a 
background of maths and physics.
          </p>
          <h2> Interests</h2>
          <h5> Rugby </h5>
          <p>
          Glasgow University Rugby Football Club
          </p>
          <h5> Videogames </h5>
          <p>
          Glasgow University Esports Team
          </p>
          <p>
          Participated in five game jams
          </p>
        </div>
        <div className="App-left">
          <h2> Experience </h2>
          <h5> University of Glasgow,  UK 2018 – 2022 </h5>
          <p> On track for First-Class Honours in Computing Science, BSc 
          </p>
          <p>
            Information Security and HCI strand Maths and Physics minors in first and second year with average A
          </p>
          <h5> American Embassy School, India 2016-2018</h5> 
          <p>Overall score of 39 in International Baccalaureate
          </p>
          <p>
          Higher level: Physics, Computer Science, Maths 
          </p>
          <p>
          Standard level: Spanish, English, Economics
          </p>

          <h2> Languages </h2>
          <h5> Python \ Java \ C \ SQL </h5>
        </div>
      </div>
    </div>
  );
}


export default App;

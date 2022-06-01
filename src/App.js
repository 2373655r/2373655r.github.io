import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-navbar">
      <a 
        className="App-link"
        href="/#"
      >
        Overview</a>
      <a 
      className="App-link"
      href="/#"
      >
        Projects
        </a>
      </div>



      { <header className="App-header">
        <h1>Rhodri Rees</h1>
        <h3>Computer Scientist</h3>
      </header>}
    

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
        <div className="App-right">
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
        </div>
      </div>
    </div>
  );
}

export default App;

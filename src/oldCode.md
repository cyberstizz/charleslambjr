import './App.css';
import About from './components/About';
import Challenges from './components/Challenges';
import Journal from './components/Journal';
import Lamb from './components/Lamb';
import Projects from './components/Projects';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {  

  return (
    <Router>
    
     
     <div className="App">
      <div className="transparent-background"></div>
      <div className="decorativeDiv"></div>
      <div className="navBar">
      <div className="logo"></div>

    <div className="navOptions">
      
   <div className="home">Home</div>
   <div className="projects">Projects</div>
   <div className="challenges">Challenges</div>
   <div className="about">About</div>
   <div className="lamb">Lamb</div>
   <div className="journal">Journal</div>
  
    </div>

      </div>

    
      
    <div className="leftFoldSection">
      <div className="socialMediaButtons">

      <a href="https://www.youtube.com/channel/UCK85fCsjJ53CrOzVnmTbp-A" class="fa fa-youtube" alt="youtube in link"></a>
      <a href="https://www.linkedin.com/in/charles-lamb-jr/" class="fa fa-linkedin" alt="linked in link"></a>
      <a href="https://www.instagram.com/charleslambjrdev/" class="fa fa-instagram" alt="instgram in link"></a>



      </div>
      <div className="greeting">Hello, I'm </div> 
      <br/>
      <br/>
      <div className="name">Charles Lamb Jr.</div>
      <div className="topSlogan">A passionate software engineer from New York</div>
      <div className="bottomSlogan">with two years of web development experience</div>
      <div className="contactArea">
          <div className="githubContact">
          <a href="https://github.com/cyberstizz"><i class="fa fa-github"></i></a></div>
          <div className="githubInfo">github.com/cyberstizz</div>
      
          <a  id="highlightedEmail" href="mailto:charles.lamb.dev@gmail.com"> <div className="emailInfo"></div><div className="actualEmail">charles.lamb.dev@gmail.com</div></a>
      </div>
      <div className="buttons">
      <button className="projectButton">Projects</button>


      
      <button className="resumeButton" onClick={() => document.getElementById("resumeDiv").style.visibility = "visible"}>Resume</button>


      </div>
      </div>
     
      <div className="rightFoldSection">

      </div>

      <div className="skewedBackgroundDecoration"></div>
      <div id="resumeDiv">
     <button id="ResumeCloseButton" onClick={() => document.getElementById("resumeDiv").style.visibility = "hidden"}>close</button>
      </div>


      </div>
      {/* <Switch>
       <Route exact path="/"><App /></Route>
       <Route path="/projects"><Projects /></Route>
       <Route path="/challenges"><Challenges /></Route>
       <Route path="/about"><About /></Route>
       <Route path="/lamb"><Lamb /></Route>
       <Route path="/journal"><Journal /></Route>

     </Switch> */}



    
</Router>
  );
  }

export default App;

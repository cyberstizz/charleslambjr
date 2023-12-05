// importing the main css file as well as React router and all routes

import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About';
import Challenges from './components/Challenges';
import Journal from './components/Journal';
import Lamb from './components/Lamb';
import Splash from './components/Splash';
import Projects from './components/Projects';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// initiating the top level component which is essentially the Switch

const App = () => {  

  return (
    <Router>
     <div className="App">
    {/* since the navbor will appear on every page it goes above the switch} */}
      
    
    {/* now the switch contains every route */}

      <Switch>
       <Route exact path="/"><Splash /></Route>
       <Route exact path="/home"><Home /></Route>
       <Route  path="/projects"><Projects /></Route>
       <Route path="/challenges"><Challenges /></Route>
       <Route path="/about"><About /></Route>
       <Route path="/lamb"><Lamb /></Route>
       <Route path="/journal"><Journal /></Route>

     </Switch>
     </div>
</Router>
  );
  }

  // now exporting top level component for use in index.js

export default App;

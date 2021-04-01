import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'
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
       <Navbar />
    
      <Switch>
       <Route exact path="/"><Home /></Route>
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

export default App;

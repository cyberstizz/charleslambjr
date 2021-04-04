import '../App.css';
import App from '../App';
import React from 'react';
import Home from './Home';
import About from './About';
import Challenges from './Challenges';
import Journal from './Journal';
import Lamb from './Lamb';
import Projects from './Projects';
import { Link } from "react-router-dom"

const Navbar = () =>{
    return(

        <div className="navBar">
      <div className="logo"></div>

    <div className="navOptions">
      
 <Link to='/'>  <div className="home">Home</div></Link> 
  <Link to='/Projects'> <div className="projects">Projects</div></Link>
  <Link to='/challenges'> <div className="challenges">Challenges</div></Link>
  <Link to='/about'> <div className="about">About</div></Link>
  <Link to='/lamb'>  <div className="lamb">Lamb</div></Link>
  <Link to='/journal'>  <div className="journal">Journal</div></Link>
  
    </div>

      </div>
    )
};

export default Navbar;
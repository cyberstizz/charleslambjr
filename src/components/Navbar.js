import '../App.css';
import React from 'react';
import { Link } from "react-router-dom"

const Navbar = () =>{
    return(

        <div className="navBar">
      <div className="logo"></div>

    <div className="navOptions">
      
 <Link to='/' style={{ textDecoration: 'none' }}>  <div className="home">Home</div></Link> 
  <Link to='/Projects' style={{ textDecoration: 'none' }}> <div className="projects">Projects</div></Link>
  <Link to='/challenges'style={{ textDecoration: 'none' }}> <div className="challenges">Challenges</div></Link>
  <Link to='/about' style={{ textDecoration: 'none' }}> <div className="about">About</div></Link>
  <Link to='/lamb' style={{ textDecoration: 'none' }}>  <div className="lamb">Lamb</div></Link>
  <Link to='/journal' style={{ textDecoration: 'none' }}>  <div className="journal">Journal</div></Link>
  
    </div>

      </div>
    )
};

export default Navbar;
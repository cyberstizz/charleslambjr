import './Splash.css';
import React from 'react';
import { Link } from 'react-router-dom';


const Splash = () =>{
    return (
        <div className='splashDiv'>
        <h2 data-text="coming soon">
       Charles Lamb Jr V2 coming December 10th
       </h2>

       <Link to="./home"><h3>visit old website</h3></Link>
       </div>
    )
};

export default Splash;
import React from 'react';
import './Card.css';


const Card = (props) => {
    return (
        <div id='wholeCard'>
        <div id='cardTop' style={{backgroundColor: props.backgroundColor}}><br />  {props.title} <br /> <a href='https://squint.netlify.app/'><button style={{backgroundColor: props.buttonColor, 'font-size': '18px', 'font-family': 'Permanent Marker, cursive',
width: '7vw', height: '5vh', marginRight: '.5vw', color: props.backgroundColor}}>Preview</button></a></div>
        <div id="entireCardBody">
        <div id="cardTitle" style={{backgroundImage: props.backgroundImage, backgroundSize: '100%', height: '40vh', width: '20vw', backgroundPosition: 'contain', backgroundRepeat: 'no-repeat'}}></div>
        </div>
        </div>
    )
};

export default Card;
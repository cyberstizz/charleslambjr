import React from 'react';
import './Card.css';


const Card = (props) => {
    return (
        <div id='wholeCard'>
            <div id='cardTop' style={{backgroundColor: props.backgroundColor}}><br />  {props.title} <br /> <button style={{backgroundColor: props.buttonColor, 'font-size': '8px', 'font-family': 'Permanent Marker, cursive',
width: '7vw', height: '5vh', marginRight: '.5vw', color: 'white'}}>Preview</button></div>
        <div id="entireCardBody">
        <div id="cardTitle"></div>
        </div>
        </div>
    )
};

export default Card;
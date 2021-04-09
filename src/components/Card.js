import React from 'react';
import './Card.css';


const Card = (props) => {
    return (
        <div id='wholeCard'>
            <div id='cardTop' style={{backgroundColor: props.backgroundColor}}><br />  {props.title} <br /> <button style={{width: '4vw', height: '3vh'}}>Preview</button></div>
        <div id="entireCardBody">
        <div id="cardTitle"></div>
        </div>
        </div>
    )
};

export default Card;
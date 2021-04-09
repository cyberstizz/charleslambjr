import React from 'react';
import './Card.css';


const Card = (props) => {
    return (
        <div id='wholeCard'>
            <div id='cardTop' style={{backgroundColor: props.backgroundColor}}><br />  {props.title}</div>
        <div id="entireCardBody">
        <div id="cardTitle"></div>
        </div>
        </div>
    )
};

export default Card;
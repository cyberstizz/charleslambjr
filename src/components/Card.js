import React from 'react';
import './Card.css';


const Card = (props) => {
    return (
        <div id='wholeCard'>
            <div id='cardTop'></div>
        <div id="entireCardBody">
        <div id="cardTitle">{props.title}</div>
        </div>
        </div>
    )
};

export default Card;
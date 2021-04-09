import React from 'react';
import './Card.css';


const Card = (props) => {
    return (
        <div id='wholeCard'>
            <div id='cardTop'>{props.title}</div>
        <div id="entireCardBody">
        <div id="cardTitle"></div>
        </div>
        </div>
    )
};

export default Card;
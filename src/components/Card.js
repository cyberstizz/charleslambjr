import React from 'react';
import './Card.css';


const Card = (props) => {
    return (
        <div id="entireCardBody">
        <div id="cardTitle">{props.title}</div>
        </div>
    )
}

export default Card;
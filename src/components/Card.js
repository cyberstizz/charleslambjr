import React from 'react';
import './Card.css';


const Card = (props) => {
    return (
        <div id="entireCardBody">
        <div>{props.title}</div>
        </div>
    )
}

export default Card;
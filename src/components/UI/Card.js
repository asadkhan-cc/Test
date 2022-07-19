import React from 'react'
import './Card.css'
function Card(props) {
    const Classes = props.className + "Card";
    return (
        <div className={Classes}>
            {props.children}
        </div>
    )
}

export default Card

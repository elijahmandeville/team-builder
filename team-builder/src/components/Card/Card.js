import React from 'react'
import './Card.scss';

function Card(props) {
    const { el } = props;
    return (
        <div className="wrapper">
            <div className="card">
                <h2>{el.name}</h2>
                <p>{el.email}</p>
                <p>{el.role}</p>
            </div>
        </div>
    )
} export default Card;
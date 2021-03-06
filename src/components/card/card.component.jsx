/* eslint-disable no-template-curly-in-string */
import React from 'react';
import './card.styles.css'

export const Card = props => (
    <div className='card-container'>
        <img className='card-container-img' alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} width='180' height='180' /> 
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email} </p>
    </div>
);
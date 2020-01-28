import React from 'react';

import './event.styles.css';

export const Event = props => (
    <div className='event-container'>
        <h2>{ props.event.title }</h2>
        <img className='event-container-img' alt='event' src={`${props.event.imageUrl}` } />
        <p>{ props.event.description }</p>
        <h3>{ props.event.location }</h3>
        <p>{ props.event.locationAddress }</p>
        <p>Ages: { props.event.ageRange }</p>
        <p>Adults: ${ props.event.priceAdult }, Child: ${ props.event.priceChild }</p>
        <a href={`${props.event.eventUrl}`}>Sign Up!</a>
    </div>
);
import React from 'react';

import {Event} from '../event/event.component';

import './event-list.styles.css';

const EventList = (props) => {
    return (
        <div className='event-list'>
            {props.eventItems.map(event => (
                <Event key={event.id} event={event} />
            ))}
        </div>
    );
}

export default EventList


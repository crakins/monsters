import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './add-event.styles.scss';

class AddEvent extends React.Component {
    constructor() {
        super();

        this.state = {
            title: '',
            description: '',
            eventUrl: '',
            imageUrl: '',
            priceChild: '',
            priceAdult: '',
            eventDate: '',
            location: '',
            locationAddress: '',
            ageRange: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        
        const { title, description, eventUrl, imageUrl, priceChild, priceAdult, 
            eventDate, location, locationAddress, ageRange } = this.state;

        const eventData = JSON.stringify({
            title: title,
            description: description,
            eventUrl: eventUrl,
            imageUrl: imageUrl,
            priceChild: parseFloat(priceChild),
            priceAdult: parseFloat(priceAdult),
            eventDate: eventDate,
            location: location,
            locationAddress: locationAddress,
            ageRange: ageRange   
        })

        console.log(eventData)

        try {
            fetch('https://hft.azurewebsites.net/api/eventitems', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: eventData
            })
        }

        catch (error) {
            console.error(error)
        }


    };

    handleChange = event => {
        const { name, value } = event.target;
    
        this.setState({ [name]: value });
      };

    render() {
        const { title, description, eventUrl, imageUrl, priceChild, priceAdult, 
            eventDate, location, locationAddress, ageRange } = this.state;
        return (
            <div className='add-event'>
                <h2>Homeschool Field Tripper Event</h2>
                <span>Add an event</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='title'
                        value={title}
                        onChange={this.handleChange}
                        label='Event Title'
                        required
                    />
                    <FormInput 
                        type='text'
                        name='description'
                        value={description}
                        onChange={this.handleChange}
                        label='Event Description'
                        required
                    />
                    <FormInput 
                        type='url'
                        name='eventUrl'
                        value={eventUrl}
                        onChange={this.handleChange}
                        label='Event URL'
                        required
                    />
                    <FormInput 
                        type='url'
                        name='imageUrl'
                        value={imageUrl}
                        onChange={this.handleChange}
                        label='Image URL'
                        required
                    />
                    <FormInput 
                        type='number'
                        name='priceChild'
                        value={priceChild}
                        onChange={this.handleChange}
                        label='Price per Child'
                        required
                    />
                    <FormInput 
                        type='number'
                        name='priceAdult'
                        value={priceAdult}
                        onChange={this.handleChange}
                        label='Price per Adult'
                        required
                    />
                    <FormInput 
                        type='datetime-local'
                        name='eventDate'
                        value={eventDate}
                        onChange={this.handleChange}
                        label=''
                        required
                    />
                    <FormInput 
                        type='text'
                        name='location'
                        value={location}
                        onChange={this.handleChange}
                        label='Location'
                        required
                    />
                    <FormInput 
                        type='text'
                        name='locationAddress'
                        value={locationAddress}
                        onChange={this.handleChange}
                        label='Location Address'
                        required
                    />
                    <FormInput 
                        type='text'
                        name='ageRange'
                        value={ageRange}
                        onChange={this.handleChange}
                        label='Age Range'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Add Event</CustomButton>
                    </div>
                </form>
            </div>
        );
    }

};

export default AddEvent;
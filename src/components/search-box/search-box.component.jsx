import React from 'react';
import './search-box.styles.css'

// when you need access to state, use a functional component 
const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search' 
        placeholder={placeholder}
        onChange={handleChange} 
    /> 
);

export default SearchBox;
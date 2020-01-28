import React from 'react';

import { CardList } from '../../components/card-list/card-list.component';
import SearchBox from '../../components/search-box/search-box.component';
import EventList from '../../components/event-list/event-list.component.jsx';

import './homepage.styles.css';

class Homepage extends React.Component {
    constructor() {
      super();
  
      this.state = {
        monsters: [],
        searchField: '',
        eventItems: []
      };
    }
  
  // lifecycle methods
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  
    fetch('https://hft.azurewebsites.net/api/eventitems')
    .then(response => response.json())
    .then(events => this.setState({eventItems: events}))
  
    //https://localhost:5001/api/eventitems
    //https://jsonplaceholder.typicode.com/users
    //https://hft.azurewebsites.net/api/eventitems
  }
  
  // custom written method
  // uses arrow function to scope this to what called it
  handleChange = e => {
    this.setState({ searchField: e.target.value })
  };
  
    render() {
      const { monsters, searchField, eventItems } = this.state; 
      const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
  
      return (
        <div className="App">
          <h1>Homeschool Field Tripper</h1>
          {/* <SearchBox 
          placeholder='search monsters...'
          handleChange={this.handleChange}
          /> */}
          <EventList eventItems={eventItems} />
          {/* <CardList monsters={filteredMonsters} /> */}
      </div>
      )
    }
  }

  export default Homepage;
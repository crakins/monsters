import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import AddEventPage from './pages/add-event/add-event.component.jsx';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/add-event' component={AddEventPage} />
        </Switch>  
      </div>
    )
  }
}

export default App;

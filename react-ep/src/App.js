import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import TicketList from './components/ticketList';
import Header from './components/header';
import NewTicketForm from './components/newTicketForm';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route path='/' exact component={TicketList} />
          <Route path='/newTicket'  component={ NewTicketForm } />
        </Switch>
      </div>
    );
  }
}

export default App;

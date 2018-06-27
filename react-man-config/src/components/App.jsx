import React from 'react';

import { Switch, Route } from 'react-router-dom';

import TicketList from './TicketList';
import Header from './header/Header';

import NewTicket from './newTicket/NewTicket';
import Ticket from './Ticket';



function App(){
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={TicketList} />
      <Route path='/newticket' component={NewTicket} />
    </Switch>
    </div>
  );
}

export default App;
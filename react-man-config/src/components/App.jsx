import React from 'react';

import { Switch, Route } from 'react-router-dom';

import TicketList from './TicketList';
import Header from './header/Header';

import NewTicket from './newTicket/NewTicket';
import Error404 from './404';



function App(){
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={TicketList} />
      <Route path='/newticket' component={NewTicket} />
      <Route component={Error404} />
    </Switch>
    </div>
  );
}

export default App;
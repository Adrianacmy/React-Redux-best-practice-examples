import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';

import TicketList from './TicketList';
import Header from './header/Header';

import NewTicket from './newTicket/NewTicket';
import Error404 from './404';



// function App(){
//   return (
//     <div>
//     <Header />
//     <Switch>
//       <Route exact path='/' component={TicketList} />
//       <Route path='/newticket' component={NewTicket} />
//       <Route component={Error404} />
//     </Switch>
//     </div>
//   );
// }


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };

    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  updateTicketElapsedWaitTime(){
    let newTicketList = this.state.masterTicketList.slice();
    newTicketList.map((ticket, index) => 
      ticket.formatedWaitTime = (ticket.timeOpen).fromNow(true)
    )
    this.setState({masterTicketList: newTicketList});
  }

  componentDidMount(){
    this.updateWaiteTime = setInterval(() => 
      this.updateTicketElapsedWaitTime(), 5000);
  }

  componentWillUnmount(){
    clearInterval(this.updateWaiteTime)
  }

  handleAddingNewTicketToList(newTicket){
    let newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render(){
    return(
      <div>
        <Header />
        <Switch>
          <Route path='/' exact render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicket onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}




export default App;
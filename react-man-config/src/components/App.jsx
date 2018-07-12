import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';

import TicketList from './TicketList';
import Header from './header/Header';

import NewTicket from './newTicket/NewTicket';
import Admin from './admin/Admin';
import Error404 from './Error404';



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
      masterTicketList: {},
      selectedTicket: null
    };

    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  updateTicketElapsedWaitTime() {
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    Object.keys(newMasterTicketList).forEach(ticketId => {
      newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    });
    this.setState({masterTicketList: newMasterTicketList});
  }

  componentDidMount(){
    this.updateWaiteTime = setInterval(() => 
      this.updateTicketElapsedWaitTime(), 5000);
  }

  componentWillUnmount(){
    clearInterval(this.updateWaiteTime)
  }

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList, {
      [newTicket.id]: newTicket
    });
    newMasterTicketList[newTicket.id].formattedWaitTime = newMasterTicketList[newTicket.id].timeOpen.fromNow(true);
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleChangingSelectedTicket(ticketId){
    this.setState({selectedTicket: ticketId});
  }

  render(){
    console.log(this.state.masterTicketList);
    return(
      <div>
        <Header />
        <Switch>
          <Route path='/' exact render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicket onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route path='/admin' render={(props) => <Admin 
                                          ticketList={this.state.masterTicketList} 
                                          currentPath={props.location.pathname}
                                          onTicketSelection={this.handleChangingSelectedTicket}
                                          selectedTicket={this.state.selectedTicket}/>}
                                          />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}




export default App;
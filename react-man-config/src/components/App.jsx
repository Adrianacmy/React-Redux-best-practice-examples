import React from 'react';
import { Switch, Route } from 'react-router-dom';

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

  handleAddingNewTicketToList(newTicket){
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render(){
    return(
      <div>
        <Header />
        <Switch>
          <Route path='/' exact render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicket onNewTicketCreation={this.handleAddingNewTicketToList}  replace/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}




export default App;
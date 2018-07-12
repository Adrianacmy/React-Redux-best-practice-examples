import React, { Component } from 'react'
import PropTypes from 'prop-types';
import TicketList from '../TicketList';
import TicketDetail from '../TicketDetail';

// export default class Admin extends Component {
//   render() {
//     return (
//       <div>
//         admin works
//       </div>
//     )
//   }
// }

export default function Admin(props){

  console.log(props.selectedTicket);
  
  let optionalSelectedTicketContent = null;
  if (props.selectedTicket != null){
    optionalSelectedTicketContent =  <TicketDetail selectedTicket={props.ticketList[props.selectedTicket]}/>;
  }
  return(
    <div>
      <h3>Admin</h3>
      {optionalSelectedTicketContent}
      <TicketList 
      ticketList={props.ticketList} 
      currentPath={props.currentPath}
      onTicketSelection={props.onTicketSelection}/>
    </div>
  );
}

Admin.propTypes = {
  tickList: PropTypes.array,
  currentPath: PropTypes.string.isRequired,
  onTicketSelection: PropTypes.func.isRequired,
  selectedTicket: PropTypes.string
};
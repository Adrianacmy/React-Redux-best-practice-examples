import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';
import TicketDetail from './TicketDetail';

// let masterTicketList = [
//   {
//     names: 'Thato and Haley',
//     location: '3A',
//     issue: 'Firebase won\'t save record. Halp.'
//   },
//   {
//     names: 'Sleater and Kinney',
//     location: '4B',
//     issue: 'Fox image not displaying on page, can only see duck?'
//   },
//   {
//     names: 'Imani & Jacob',
//     location: '9F',
//     issue: 'Donkey picture not displaying on hover in Zoology app. :('
//   }
// ];

function TicketList(props){
  return (
    <div>
    <hr/>
    
    {Object.keys(props.ticketList).map(function(ticketId) {
      var ticket = props.ticketList[ticketId];
      return <Ticket names={ticket.names}
      location={ticket.location}
      issue={ticket.issue}
      formattedWaitTime={ticket.formattedWaitTime}
      currentPath={props.currentPath}
      key={ticket.id}
      onTicketSelection={props.onTicketSelection}/>;
    })}
  </div>
    

  );
}

TicketList.propTypes = {
  // ticketList: PropTypes.array,
  ticketList: PropTypes.object,
  onTicketSelection: PropTypes.func

};


export default TicketList;
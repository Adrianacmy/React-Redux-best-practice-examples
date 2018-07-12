import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

// import sun from '../assets/images/sun.png';

function Ticket(props){
  // let ticketStyle = {
  //   backgroundColor: 'pink',
  //   fontSize: '3rem',
  //   padding: '4rem'
  // };

  
  // function displayTimeOpen(timeOpen){
  //   return timeOpen.from(new Moment(), true);
  // }

  // function handleONTicketClick(){
  //   alert('you are an admn');
  // }


  const ticketInfo = 
  <div>
    <h3>{props.location} - {props.names}</h3>
    <p><em>{props.formatedWaitTime} ago</em></p>
    <hr/>
  </div>;

  if (props.currentPath === '/admin'){
    return (
      <div onClick={() => {props.onTicketSelection(props.ticketId);} }>
      {ticketInfo}
    </div>
    );
  }else{
    return (
      <div>
        {ticketInfo}
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  // timeOpen: PropTypes.instanceOf(Moment).isRequired,
  formatedWaitTime: PropTypes.string,
  currentPath: PropTypes.string,
  onTicketSelection: PropTypes.func,
  ticketId: PropTypes.string.isRequired

};

export default Ticket;
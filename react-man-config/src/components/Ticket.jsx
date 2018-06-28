import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import sun from '../assets/images/sun.png';

function Ticket(props){
  // let ticketStyle = {
  //   backgroundColor: 'pink',
  //   fontSize: '3rem',
  //   padding: '4rem'
  // };

  
  // function displayTimeOpen(timeOpen){
  //   return timeOpen.from(new Moment(), true);
  // }

  return (
    <div>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <p><em>{props.formatedWaitTime} ago</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  timeOpen: PropTypes.instanceOf(Moment).isRequired,
  formatedWaitTime: PropTypes.string
};

export default Ticket;
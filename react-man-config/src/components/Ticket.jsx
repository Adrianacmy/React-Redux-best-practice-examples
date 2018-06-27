import React from 'react';
import PropTypes from 'prop-types';

import sun from '../assets/images/sun.png';

function Ticket(props){
  // let ticketStyle = {
  //   backgroundColor: 'pink',
  //   fontSize: '3rem',
  //   padding: '4rem'
  // };

  return (
    <div>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <img src={sun}/>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
};

export default Ticket;
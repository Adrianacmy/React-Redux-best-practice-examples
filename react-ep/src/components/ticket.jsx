import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Ticket extends Component{
  constructor(props){
    super(props);

    this.PropTypes = {
      names: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      issue: PropTypes.string.isRequired 
    };

   

  }

  render(){
    const ticketStyle = {//has to end with a ,
      backgroundColor: 'pink',
      fontSize: '1.3rem',
      paddingTop: '2rem',
    }

    return (
      <div style={ticketStyle}>
      <h3>{ this.props.location} - { this.props.names }</h3>
      <p><em>{ this.props.issue }</em></p>
      <hr/>
    </div>
    );
  }
}

export default Ticket;

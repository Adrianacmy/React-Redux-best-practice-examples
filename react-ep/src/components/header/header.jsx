import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <div>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newTicket">Create Ticket</Link>
      </div>
    );
  }
}


export default Header;
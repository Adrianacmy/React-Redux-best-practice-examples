import React, { Component } from 'react';

import Ticket from "./ticket";


class TicketList extends Component{

  constructor(props){
    super(props);
    this.state = {
      masterTicketList: [
        {
          names: 'Thato and Haley',
          location: '3A',
          issue: 'Firebase won\'t save record. Halp.'
        },
        {
          names: 'Sleater and Kinney',
          location: '4B',
          issue: 'Fox image not displaying on page, can only see duck?'
        },
        {
          names: 'Imani & Jacob',
          location: '9F',
          issue: 'Donkey picture not displaying on hover in Zoology app. :('
        }
      ]
    }
  }


  render(){
    return (
      <div>
        { this.state.masterTicketList.map((ticket, index) => {
          <Ticket 
          location={ ticket.location }
          names={ ticket.names }
          issue={ ticket.issue } 
          key = { ticket.index }
          />
        })}
      
      </div>
    );
  }
}


export default TicketList;



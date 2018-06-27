import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css'; //css module

function Header(){
  return (
    <h1 className={ styles.myheader }>
      Help Queue
      <Link to="/">Home</Link> | <Link to='/newTicket'>Create Ticket</Link> 
    </h1>
  );
}

export default Header;
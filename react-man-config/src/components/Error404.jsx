import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../assets/images/1.jpg'; //css module

function Error404(){
  const styles = {
    img:{
      width: '50%'
    }
  }

  return (
   <div><img src={img1} style={styles.img}/></div>
  );
}

export default Error404;
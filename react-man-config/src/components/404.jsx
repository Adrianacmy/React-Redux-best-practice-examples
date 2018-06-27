import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import sun from '../assets/images/sun.png';

export default function Error404(props){
  console.log(props);
  return (
    <div>
    <h2>wow， 陽光燦爛</h2>
    <p>{props.location.pathname} is not exist</p>
    <p>would you like to go <Link to='/'>Home</Link></p>
      <img src={sun} />
    </div>
  )
}

Error404.propTypes = {
  location: PropTypes.object
};

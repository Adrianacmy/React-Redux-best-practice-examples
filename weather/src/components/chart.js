import _ from 'lodash';

import React, { Component } from 'react';
import { Sparkinlines, SparkinlinesLine, SparklinesReferenceLine } from 'react-sparklines';


function average(data){
  return _.round(_.sum(data) / data.length);
}


// export default (props) => {
//   return (
//     <div>
//       <Sparkinlines height={120} width={130} data={props.data}>
//         <SparkinlinesLine color={props.color}/>
//         <SparklinesReferenceLine type="mean"/>
//       </Sparkinlines> 
//       <div>{average(props.data)} {props.unit}</div>
//     </div>   
//   );
// };


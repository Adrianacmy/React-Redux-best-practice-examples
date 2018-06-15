import { FEATCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  // console.log('action received',action);
  switch( action.type){
    case FEATCH_WEATHER:
      // never try to change a state, below code will return  a new state
      return [action.payload.data, ...state]; // insert new item at the top of old array
  }

  return state;
}
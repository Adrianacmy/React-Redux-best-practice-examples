import _ from 'lodash';

import { FETCH_POSTS } from '../actions'; // import from index doesn't need to specify the file name

export default function(state={}, action){

  switch(action.type){
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, id);
    default: 
      return state;
  }
}
import _ from 'lodash';

import { FETCH_POSTS, FEATCH_POST } from '../actions'; // import from index doesn't need to specify the file name

export default function(state={}, action){

  switch (action.type){
    case FEATCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default: 
      return state;
  }
}
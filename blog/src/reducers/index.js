import { combineReducers } from 'redux';
import { reducer as formReducer } from 'react-form';


import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,

});

export default rootReducer;

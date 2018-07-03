import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts'
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer  //this links all <form></form> tags of any component with the redux state 'form'
});

export default rootReducer;

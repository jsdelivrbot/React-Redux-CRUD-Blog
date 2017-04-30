import { combineReducers } from 'redux';
import ReducersPosts from './reducers_posts';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  posts: ReducersPosts,
  form:formReducer
});

export default rootReducer;

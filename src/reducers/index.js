import { combineReducers } from 'redux';
import commmentsReducer from './comments';

const rootReducer = combineReducers({
  comments: commmentsReducer
});

export default rootReducer;

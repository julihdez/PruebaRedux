import { createStore, combineReducers } from 'redux';
import loggedInReducer from './reducer';

const rootReducer = combineReducers({
  loggedInReducer: loggedInReducer,
});


export const store = createStore(
  rootReducer,
 );


 
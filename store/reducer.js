import { LOGGED_IN, LOGGED_OUT } from './actions';
import { initialState } from './initialState';
import { useSelector } from 'react-redux'
import { combineReducers } from 'redux';


const loggedInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return [
        {
          ...state,
          logged: action.logged
        },
        
      ];
      case LOGGED_OUT:
      return [
        {
          ...state,
          logged: action.logged        }
      ];
      default:
        return state;
  };
}

// export function useEmployees() {
//   return useSelector((state) => state.employees)
// }


  

export default loggedInReducer





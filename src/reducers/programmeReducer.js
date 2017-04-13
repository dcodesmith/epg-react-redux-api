import {
  LOAD_PROGRAMMES_SUCCESS,
  CREATE_PROGRAMMES_SUCCESS,
  DELETE_PROGRAMMES_SUCCESS
} from '../actions/actionTypes';
import initialState from './initialState';

// Consider using immutable.js here

export default function programmeReducer(state = initialState.programmes, action) {
  switch (action.type) {
    case LOAD_PROGRAMMES_SUCCESS: {
      return action.programmes;
    }

    case CREATE_PROGRAMMES_SUCCESS: {
      console.log('state', state);
      console.log('action.programmes', action.programmes);
      
      return action.programmes;
    }

    case DELETE_PROGRAMMES_SUCCESS: {
      return [];
    }

    default:
      return state;
  }
}

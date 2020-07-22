
import {ADD_TASK, TOGGLE_TASK, DELETE_TASK} from '../actionTypes.js';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
  case ADD_TASK:
    return [action.payload, ...state];
  case TOGGLE_TASK:
    return state.map((item) => {
      if (item.id === action.payload) item.completed = !item.completed;
      return item;
    }, []);
  case DELETE_TASK:
    return state.filter(item => item.id !== action.payload);
  default:
    return state;
  }
}

import { combineReducers } from 'redux';

const testReducer = (state = [], action) => {
  return [...state, action];
};

const rootReducer = combineReducers(testReducer);

export default rootReducer;

import { combineReducers } from 'redux';

// reducers

const appReducer = combineReducers({

});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
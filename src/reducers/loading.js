import { combineReducers } from "redux";
import * as at from "../actions";
import { successAction, errorAction, requestAction } from "../actions/helpers";

// The state gets automatically generated based on the apiActions
const createAllLoadingReducers = () => {
  let reducers = {};
  for (let actionType in at) {
    reducers = {
      ...reducers,
      [actionType]: createLoadingReducer(false, actionType)
    };
  }
  return reducers;
};

const createLoadingReducer = (initialState, apiActionType) => {
  const successType = successAction(apiActionType);
  const requestType = requestAction(apiActionType);
  const errorType = errorAction(apiActionType);
  return (state = initialState, action) => {
    switch (action.type) {
      case requestType:
        return true;
      case successType:
        return false;
      case errorType:
        return false;
      default:
        return state;
    }
  };
};

export default combineReducers(createAllLoadingReducers());

import * as at from "../actions";
import { successAction } from "../actions/helpers";

const initialState = {
  translations: [],
  suggestions: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case successAction(at.SEARCH_TRANSLATIONS):
      console.log(action);
      return { ...state, suggestions: action.payload.data };
    default:
      return state;
  }
};

import * as at from "../actions";
import { successAction } from "../actions/helpers";

const initialState = {
  translations: [],
  suggestions: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case successAction(at.SEARCH_TRANSLATIONS):
      return { ...state, suggestions: action.payload.data };
    case successAction(at.GET_TRANSLATIONS):
      return { ...state, translations: action.payload.data };
    default:
      return state;
  }
};

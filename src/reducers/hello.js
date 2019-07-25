import * as at from "../actions/types";

export default (state = "", action) => {
  switch (action.type) {
    case at.SAY_HELLO:
      return "hello";
    default:
      return state;
  }
};

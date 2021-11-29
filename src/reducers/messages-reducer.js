import * as c from "../actions/action-constants";

const initialState = {};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.CREATE_MESSAGE:
      return (state = action.payload);
    default:
      return state;
  }
};

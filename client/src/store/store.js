import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import userData from "./slices/userdata.slice";

const combineReducer = combineReducers({
  userData,
});
const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      userData: {
        users: [...action.paload.users.users, ...state.users.users],
      },
    };
    return nextState;
  } else {
    return combineReducer(state, action);
  }
};

export const store = () =>
  configureStore({
    reducer: masterReducer,
  });
export const wrapper = createWrapper(store);

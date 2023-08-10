import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import SignInReducer from "./features/SignIn";

import produce from "immer";

export default configureStore({
  reducer: {
    SignIn: SignInReducer,
  }, //add reducers here
});

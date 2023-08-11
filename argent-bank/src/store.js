import { configureStore } from "@reduxjs/toolkit";
import SignInReducer from "./features/SignIn";

export default configureStore({
  reducer: {
    SignIn: SignInReducer,
  },
});

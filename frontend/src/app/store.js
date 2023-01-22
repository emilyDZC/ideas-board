import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import ideaReducer from "../features/ideas/ideaSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ideas: ideaReducer,
  },
});

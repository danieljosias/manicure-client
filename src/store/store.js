import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "../slices/clients/clients";

export default configureStore({
  reducer: {
    clients: clientsReducer,
  },
});
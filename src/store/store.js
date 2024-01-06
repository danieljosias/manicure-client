import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "../slices/clients/clients";

export const store = configureStore({
  reducer:  {
    clients: clientsReducer,
  },
})







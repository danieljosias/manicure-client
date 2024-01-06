import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: "Dave Patrick", address: "Rua X", cellphone: '1234 7896', observation: 'Não gosta de cor suave', id: "1" },
];

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    clientAdded(state, action){
        state.push(action.payload);
    },
    clientUpdated(state, action) {
        const { name, address, cellphone, observation, id } = action.payload;
    
        const existingClient = state.find((client) => client.id === id);
        if (existingClient) {
          existingClient.name = name === ''? existingClient.name : name;
          existingClient.address = address === ''? existingClient.address : address;
          existingClient.cellphone = cellphone === ''? existingClient.cellphone : cellphone;
          existingClient.observation = observation=== ''? existingClient.observation : observation;
        }
    },
    clientDeleted(state, action) {
        const { id } = action.payload;
        const existingClient = state.find((client) => client.id === id);
        if (existingClient) {
          return state.filter((client) => client.id !== id);
        }
      },
  },
  
});

export const { clientAdded, clientUpdated, clientDeleted } = clientsSlice.actions;

export default clientsSlice.reducer;
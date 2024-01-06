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
    }
  },
});

export const { clientAdded } = clientsSlice.actions;

export default clientsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
};

export const userData = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = userData.actions;
export const selecetData = (state) => state.data;
export default userData.reducer;

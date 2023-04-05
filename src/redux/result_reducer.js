import { createSlice } from "@reduxjs/toolkit";

export const resultReducer = createSlice({
  name: "result",
  initialState: {
    userId: null,
    result: [],
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    pushResultAction: (state, action) => {
      state.result.push(action.payload);
    },
  },
});

// where does actions come from?
export const { setUserId, pushResultAction } = resultReducer.actions;

// why not .reducers?
export default resultReducer.reducer;

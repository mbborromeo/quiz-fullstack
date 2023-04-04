import { createSlice } from "@reduxjs/toolkit";

/* initialise store */
export const questionReducer = createSlice({
  name: "questions",
  initialState: {
    queue: [],
    answers: [],
    trace: 0, // which question user is up to
  },
  reducers: {
    startExamAction: (state, action) => {
      return {
        ...state,
        queue: action.payload,
      };
    },
  },
});

export const { startExamAction } = questionReducer.actions;

// why not .reducers?
export default questionReducer.reducer;

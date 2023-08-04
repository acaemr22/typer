import { createSlice } from "@reduxjs/toolkit";

export const typingTestSlice = createSlice({
  name: "typingTest",
  initialState: {
    correctTypedWordIndexes: [],
    WPM: 0,
    completedCount: 0,
    input: "",
  },
  reducers: {
    handleInputChange: (state, action) => {
      const input = action.payload

      if(input !== " " && input.slice(-1) !== " ") {
        state.input = input
      }

      else {
        state.input = ""
      }
      
    }
  },
});

export default typingTestSlice.reducer;

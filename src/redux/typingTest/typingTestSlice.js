import { createSlice } from "@reduxjs/toolkit";

export const typingTestSlice = createSlice({
  name: "typingTest",
  initialState: {
    correctTypedWordIndexes: [],
    WPM: 0,
    completedCount: 0,
    input: "",
  },
  reducers: {},
});

export default typingTestSlice.reducer;

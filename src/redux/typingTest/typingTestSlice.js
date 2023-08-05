import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWordList = createAsyncThunk(
  "typingTest/fetchWordList",
  async ({ wordListType }) => {
    const res = await fetch(`http://localhost:3000/api/${wordListType}`);
    const data = await res.json();
    return data;
  }
);

export const typingTestSlice = createSlice({
  name: "typingTest",
  initialState: {
    correctTypedWordIndexes: [],
    WPM: 0,
    completedCount: 0,
    input: "",
    wordList: [],
    fetchWordList: {
      status: "idle",
    },
  },
  reducers: {
    handleInputChange: (state, action) => {
      const input = action.payload;

      if (input !== " " && input.slice(-1) !== " ") {
        state.input = input;
      } else {
        state.input = "";
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchWordList.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.wordList = action.payload;
    });
    builder.addCase(fetchWordList.rejected, (state, action) => {
      state.status = "failed";
      state.wordList = action.error.message;
    });
  },
});

export default typingTestSlice.reducer;
export const { handleInputChange } = typingTestSlice.actions;

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
    wordClassNames: 0,
    currentWord: "",
    currentWordState: "idle",
    limits: { start: 0, end: 36, diff: 36 },
  },
  reducers: {
    handleInputChange: (state, action) => {
      const input = action.payload.input;
      if (!/\s+/g.test(input)) {
        state.input = input;

        state.wordClassNames = !input
          ? 0
          : state.currentWord.includes(input)
          ? 1
          : 2;
      } else {
        if (/\S+\s$/g.test(input)) {
          const { limits, completedCount } = state;
          if (limits.end == completedCount + 1) {
            state.limits.start += state.limits.diff;
            state.limits.end += state.limits.diff;
          }

          if (input.slice(0, -1) == state.currentWord) {
            state.correctTypedWordIndexes.push(completedCount);
          }
          state.currentWord = state.wordList[completedCount + 1];
          state.wordClassNames = 0;
        }
        state.input = "";
        state.completedCount++;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchWordList.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.wordList = action.payload;
      state.currentWord = action.payload[state.completedCount];
    });
    builder.addCase(fetchWordList.rejected, (state, action) => {
      state.status = "failed";
      state.wordList = action.error.message;
    });
  },
});

export default typingTestSlice.reducer;
export const { handleInputChange } = typingTestSlice.actions;

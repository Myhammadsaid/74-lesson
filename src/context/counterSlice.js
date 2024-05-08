import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
  },
  reducers: {
    inc(state, action) {
      state.value += action.payload;
    },
    reset(state) {
      state.value = 1;
    },
  },
});
export const selectCounter = (state) => state.counter.value;
export const { inc, reset } = counterSlice.actions;
export default counterSlice.reducer;

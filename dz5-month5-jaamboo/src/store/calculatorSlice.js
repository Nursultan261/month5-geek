import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    number1: "",
    namber2: "",
    result: 0,
  },
  reducers: {
    setNum1: (state, action) => {
      state.num1 = action.payload;
    },
    setNum2: (state, action) => {
      state.num2 = action.payload;
    },
    add: (state) => {
      state.result = state.num1 + state.num2;
    },
    subtract: (state) => {
      state.result = state.num1 - state.num2;
    },
    multiply: (state) => {
      state.result = state.num1 * state.num2;
    },
    divide: (state) => {
      state.result = state.num1 / state.num2;
    },
  },
});

export const { setNum1, setNum2, add, subtract, multiply, divide } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;

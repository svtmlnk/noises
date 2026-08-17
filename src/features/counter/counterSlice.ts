import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// основа работа с данными

// типизация данных
export interface CounterState {
  value: number;
}

// сами данные
const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",

  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (
      state,
      // action нужен для того, чтобы передавать аргументы (данные) в эту функцию, например 10
      action: PayloadAction<number>,
    ) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;

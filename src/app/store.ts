import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import musicReducer from "../features/music/musicSlice";

// создание самого стора, единого объекта, который хранит все состояние (state) данного приложения
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    music: musicReducer,
  },
});

// https://react-redux.js.org/tutorials/typescript-quick-start#project-setup
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
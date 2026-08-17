import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

import iney from "/music/INEY.mp3?url";
import chiralium from "/music/chiralium.mp3?url";

// основа работа с данными

// типизация массива данных
export type MusicInfo = {
    id: number;
    src: string;
    img: string;
    title: string;
    author: string;
};

export interface MusicState {
  music_arr: MusicInfo[];
}

// список заготовленной музыки
const initialState: MusicState = {
  music_arr: [
    {
      id: 1,
      src: chiralium,
      img: "https://i.scdn.co/image/ab67616d0000b273442e51d795b053b4a9642fd9",
      title: "Chiralium",
      author: "Ludvig Forssell",
    },
    {
      id: 2,
      src: iney,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsrRbCFXdQVAsVvsVsPhOQiARjLPks_L5v5ByofhsF7m_ru6Qf9sHwA6RK&s=10",
      title: "NНΞЙ",
      author: "Ножевые ранения",
    },
  ],
};

export const musicSlice = createSlice({
  name: "music_data",

  initialState,

  reducers: {
    add: (state) => {
      //   state.music_arr.push("Hello");
      console.log("Hello");
    },

    destroy: (state) => {
      state.music_arr.pop();
    },
  },
});

export const { add, destroy } = musicSlice.actions;

export const selectMusic = (state: RootState) => state.music.music_arr;

export default musicSlice.reducer;

import { createSlice, } from '@reduxjs/toolkit';
import fs from 'fs';
import { RootState } from '../store';

interface ISticker {
    name: string;
    url: string;
}

const stickersSlice = createSlice({
  name: 'stickers',
  initialState: [] as ISticker[],
  reducers: {
    importStickers: (state, action) => {
        const stickers = JSON.parse(fs.readFileSync(action.payload, 'utf8')) as ISticker[];
        state.push(...stickers);
      },
  },
});

export const selectStickers = (state: RootState) => state.stickers;
export const selectStickerByName = (name: string) => (state: RootState) =>
  state.stickers.find((sticker) => sticker.name === name);
export const selectStickerByUrl = (url: string) => (state: RootState) =>
  state.stickers.find((sticker) => sticker.url === url);

export const { importStickers } = stickersSlice.actions;

export default stickersSlice.reducer;
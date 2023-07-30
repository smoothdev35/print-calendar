import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction, ThunkDispatch, configureStore } from '@reduxjs/toolkit';
import monthsSlice from './slices/monthsSlice';
import birthdaysSlice from './slices/birthdaysSlice';
import stickersSlice from './slices/stickersSlice';

const store = configureStore({
  reducer: {
    months: monthsSlice,
    birthdays: birthdaysSlice,
    stickers: stickersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, never, AnyAction>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
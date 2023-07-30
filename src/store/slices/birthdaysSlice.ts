import { createSlice } from '@reduxjs/toolkit';
import fs from 'fs';
import { RootState } from '../store';

interface IBirthday {
  firstName: string;
  lastName: string;
  date: Date;
}

const birthdaysSlice = createSlice({
  name: 'birthdays',
  initialState: [] as IBirthday[],
  reducers: {
    importBirthdays: (state, action) => {
      const birthdays = JSON.parse(fs.readFileSync(action.payload, 'utf8')) as IBirthday[];
      state.push(...birthdays);
    },
  },
});

export const selectBirthdays = (state: RootState) => state.birthdays;
export const selectBirthdayByName = (name: string) => (state: RootState) =>
  state.birthdays.find(
    (birthday) => `${birthday.firstName} ${birthday.lastName}`.toLowerCase() === name.toLowerCase()
  );
export const selectUpcomingBirthdays = (state: RootState) => {
  const today = new Date();
  const upcomingBirthdays = state.birthdays.filter(
    (birthday) =>
      birthday.date.getMonth() === today.getMonth() &&
      birthday.date.getDate() >= today.getDate()
  );
  upcomingBirthdays.sort((a, b) => a.date.getDate() - b.date.getDate());
  return upcomingBirthdays;
};

export const { importBirthdays } = birthdaysSlice.actions;



export default birthdaysSlice.reducer;
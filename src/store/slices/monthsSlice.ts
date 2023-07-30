import { createSlice } from "@reduxjs/toolkit";
import { IDay, TMonthNames } from "@models/dates.models";
import { isLeapYear, numericDayNames } from "@utils/dates.utils";
import { RootState } from "../store";

interface IInitialState {
  [key: TMonthNames]: IDay[];
}

const initialState: IInitialState = {
  january: Array.from({ length: 31 }, (_, i) => ({
    date: i + 1,
    day: numericDayNames[new Date(new Date().getFullYear(), 0, i + 1).getDay()],
  })),
  february: Array.from({ length: isLeapYear(new Date().getFullYear()) ? 29 : 28 }, (_, i) => ({
    date: i + 1,
    day: numericDayNames[new Date(new Date().getFullYear(), 1, i + 1).getDay()],
  })),
  march: Array.from({ length: 31 }, (_, i) => ({
    date: i + 1,
    day: numericDayNames[new Date(new Date().getFullYear(), 2, i + 1).getDay()],
  })),
  april: Array.from({ length: 30 }, (_, i) => ({
    date: i + 1,
    day: numericDayNames[new Date(new Date().getFullYear(), 3, i + 1).getDay()],
  })),
  may: Array.from({ length: 31 }, (_, i) => ({
    date: i + 1,
    day: numericDayNames[new Date(new Date().getFullYear(), 4, i + 1).getDay()],
  })),
  june: Array.from({ length: 30 }, (_, i) => ({
    date: i + 1,
    day: numericDayNames[new Date(new Date().getFullYear(), 5, i + 1).getDay()],
  })),
  july: Array.from({ length: 31 }, (_, i) => ({
    date: i + 1,
    day: numericDayNames[new Date(new Date().getFullYear(), 6, i + 1).getDay()],
  })),
  august: Array.from({ length: 31 }, (_, i) => ({
    date: i + 1,
    day: numericDayNames[new Date(new Date().getFullYear(), 7, i + 1).getDay()],
  })),
  september: Array.from({ length: 30 }, (_, i) => ({
    date: i + 1,
    day: numericDayNames[new Date(new Date().getFullYear(), 8, i + 1).getDay()],
  })),
  october: Array.from({ length: 31 }, (_, i) => ({
    date: i + 1,
    day: numericDayNames[new Date(new Date().getFullYear(), 9, i + 1).getDay()],
  })),
  november: Array.from({ length: 30 }, (_, i) => ({
    date: i + 1,
    day: numericDayNames[new Date(new Date().getFullYear(), 10, i + 1).getDay()],
  })),
  december: Array.from({ length: 31 }, (_, i) => ({
    date: i + 1,
    day: numericDayNames[new Date(new Date().getFullYear(), 11, i + 1).getDay()],
  })),
};


const monthsSlice = createSlice({
  name: "months",
  initialState,
  reducers: {},
});

export const selectMonths = (state: RootState) => state.months;
export const selectMonthByName = (name: string) => (state: RootState) =>
  state.months[name.toLowerCase()];
export const selectDayByDate = (monthName: string, date: number | string) => (state: RootState) =>
  state.months[monthName.toLowerCase()].find((day) => day.date === date);

export default monthsSlice.reducer;

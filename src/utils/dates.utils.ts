import { INumericDayNames, TDayNames } from "../models/dates.models";

export const numericDayNames: INumericDayNames = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

export const dayNames = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
};

export const monthNames = {
    January: "January",
    February: "February",
    March: "March",
    April: "April",
    May: "May",
    June: "June",
    July: "July",
    August: "August",
    September: "September",
    October: "October",
    November: "November",
    December: "December",
};

export const dayNamesArray: TDayNames[] = [
  dayNames.Monday,
  dayNames.Tuesday,
  dayNames.Wednesday,
  dayNames.Thursday,
  dayNames.Friday,
  dayNames.Saturday,
  dayNames.Sunday,
];

export const isLeapYear = (year: number): boolean => {
  const feb29 = new Date(year, 1, 29);
  return feb29.getMonth() === 1 && feb29.getDate() === 29;
};

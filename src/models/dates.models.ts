import { dayNames, monthNames } from "../utils/dates.utils";

export interface IDay {
  date: number;
  day: TDayNames;
}

export interface INumericDayNames {
  [key: string]: string;
}

export type TDayNames = (typeof dayNames)[keyof typeof dayNames];
export type TMonthNames = (typeof monthNames)[keyof typeof monthNames];

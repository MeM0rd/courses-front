import dayjs from "dayjs";

export const lcFirst = (str: string): string => {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export const ucFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getDayOfWeekShortTitle = (dayNumber: number): string => {
  return dayjs().day(dayNumber).format('dd');
}

export const onlyDigits = (string: string): string => {
  return string.replace(/[^0-9]/g, '');
};

/**
 * General utility functions.
 */

import { GptModel } from "@/types/Enum/prompt.enum";
import { Status } from "@/types/Interface/fiverr.interface";

/**
 * Formats a date to a string.
 *
 * @param date: Date to format
 *
 * @returns {string} - Formatted date string
 *
 * @example formatDate(new Date()) // Returns 2021-08-31T12:00:00.000Z
 *
 * @throws - If no date is provided.
 *
 */
export const formatDate = (date: Date): string => {
  if (!date) throw new Error("No date provided");
  // Add date formatting logic here
  return date.toISOString();
};

/**
 * Capitalize the first letter of a string.
 *
 * @param str - The input string.
 *
 * @returns - The string with the first letter capitalized.
 *
 * @example capitalizeFirstLetter("hello") // Returns "Hello"
 *
 * @throws - If no string is provided.
 */
export const capitalizeFirstLetter = (str: string): string => {
  if (!str) throw new Error("No string provided");

  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Check if a string is empty or consists only of whitespace.
 *
 * @param str - The input string.
 *
 * @returns - True if the string is empty or contains only whitespace; otherwise, false.
 *
 * @example isStringEmpty("hello") // Returns false
 *
 * @throws - If no string is provided.
 *
 */
export const isStringEmpty = (str: string): boolean => {
  if (!str) throw new Error("No string provided");
  return str.trim() === "";
};

/**
 * Replace all occurrences of a substring in a string.
 *
 * @param str - The input string.
 *
 * @param search - The substring to search for.
 *
 * @param replacement - The substring to replace occurrences with.
 *
 * @returns - The string with all occurrences of the search substring replaced.
 *
 * @example replaceAll("hello_ali)", "_", " ") // Returns "hello ali"
 * @example replaceAll("hello123ali123", "123", " ") // Returns "hello ali"
 *
 * @throws - If no string, search, or replacement is provided.
 */
export const replaceAll = (
  str: string,
  search: string,
  replacement: string
): string => {
  if (!str || !search || !replacement)
    throw new Error("required parameters not provided");

  return str.replace(new RegExp(search, "g"), replacement);
};

export const removeNewlines = (input: string): string => {
  // Use a regular expression to match and remove both \n and \\n
  return input.replace(/\\n|\n/g, "");
};

export const returnModelType = (value: string) => {
  switch (value) {
    case GptModel.GPT_4O_MINI:
      return "GPT 4o Mini";
    case GptModel.GPT_4O:
      return "GPT 4o";
    case GptModel.GPT_4O_2024_08_06:
      return "GPT 4o Aug 6th";
    default:
      return "Unknown";
  }
};

export function getDateRange(
  filterType: "today" | "week" | "month" | "yesterday"
) {
  const startDate = new Date();
  const endDate = new Date();

  switch (filterType) {
    case "today":
      startDate.setHours(0, 0, 0, 0); // Start of today
      endDate.setHours(23, 59, 59, 999); // End of today
      break;

    case "yesterday":
      startDate.setDate(startDate.getDate() - 1);
      startDate.setHours(0, 0, 0, 0); // Start of yesterday
      endDate.setDate(endDate.getDate() - 1);
      endDate.setHours(23, 59, 59, 999); // End of yesterday
      break;

    case "week":
      const currentDay = startDate.getDay();
      const diff = startDate.getDate() - currentDay;
      startDate.setDate(diff); // Start of the week (Sunday)
      startDate.setHours(0, 0, 0, 0);
      endDate.setDate(diff + 6); // End of the week (Saturday)
      endDate.setHours(23, 59, 59, 999);
      break;

    case "month":
      startDate.setDate(1); // Start of the month
      startDate.setHours(0, 0, 0, 0);
      endDate.setMonth(endDate.getMonth() + 1, 0); // End of the month
      endDate.setHours(23, 59, 59, 999);
      break;
  }

  // Return in ISO format
  return {
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
  };
}

export const formatStatusLabel = (status: Status): string => {
  return status
    ?.replace(/-/g, " ") // Replace dashes with spaces
    ?.replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
};

// Pagination
type GenericPaginationProps<T> = {
  data?: {
    currentPage: number;
    totalPages: number;
    [key: string]: T[] | number;
  };
  metaData: { limit: number; currentPage: number };
  setMetaData: (newMetaData: { limit: number; currentPage: number }) => void;
  key: string;
};

type RowsPerPageProps<T> = GenericPaginationProps<T> & {
  value: string;
};
export const handleNext = <T>({
  data,
  metaData,
  setMetaData,
  key,
}: GenericPaginationProps<T>) => {
  if (!data || data.currentPage === data.totalPages) return;
  if ((data[key] as T[]).length > 0) {
    setMetaData({ ...metaData, currentPage: data.currentPage + 1 });
  }
};
export const handlePrevious = <T>({
  data,
  metaData,
  setMetaData,
  key,
}: GenericPaginationProps<T>) => {
  if (!data || data.currentPage === 1) return;
  if ((data[key] as T[]).length > 0 && metaData.currentPage > 1) {
    setMetaData({ ...metaData, currentPage: metaData.currentPage - 1 });
  }
};

export const handleRowsPerPageChange = <T>({
  data,
  metaData,
  setMetaData,
  key,
  value,
}: RowsPerPageProps<T> & { value: string }) => {
  if (!data || !(data[key] as T[]).length) return;
  setMetaData({ ...metaData, currentPage: 1, limit: +value });
};

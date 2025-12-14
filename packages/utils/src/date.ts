import { format, formatDistanceToNow, isAfter, isBefore, isEqual } from 'date-fns';

export const formatDate = (date: Date | string, pattern = 'PPP'): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, pattern);
};

export const formatDateTime = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format(dateObj, 'PPpp');
};

export const formatTimeAgo = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return formatDistanceToNow(dateObj, { addSuffix: true });
};

export const isDateAfter = (date: Date | string, compareDate: Date | string): boolean => {
  const date1 = typeof date === 'string' ? new Date(date) : date;
  const date2 = typeof compareDate === 'string' ? new Date(compareDate) : compareDate;
  return isAfter(date1, date2);
};

export const isDateBefore = (date: Date | string, compareDate: Date | string): boolean => {
  const date1 = typeof date === 'string' ? new Date(date) : date;
  const date2 = typeof compareDate === 'string' ? new Date(compareDate) : compareDate;
  return isBefore(date1, date2);
};

export const isDateEqual = (date1: Date | string, date2: Date | string): boolean => {
  const d1 = typeof date1 === 'string' ? new Date(date1) : date1;
  const d2 = typeof date2 === 'string' ? new Date(date2) : date2;
  return isEqual(d1, d2);
};

export const getStartOfDay = (date: Date = new Date()): Date => {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  return start;
};

export const getEndOfDay = (date: Date = new Date()): Date => {
  const end = new Date(date);
  end.setHours(23, 59, 59, 999);
  return end;
};
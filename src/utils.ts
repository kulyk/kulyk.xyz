import {format, parseISO} from 'date-fns';

export function formatPubDate(dateISO: string): string {
  const publishedDate = parseISO(dateISO);
  return format(publishedDate, 'dd MMMM');
}

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

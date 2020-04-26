import {format, parseISO} from 'date-fns';

export function formatPubDate(dateISO: string): string {
  const publishedDate = parseISO(dateISO);
  return format(publishedDate, 'dd MMMM');
}

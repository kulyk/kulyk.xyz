import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import Config from './config';

export function getUrl(path: string): string {
  return `${Config.SITE_URL}/${path}`;
}

export function getPostFullUrl(slug: string): string {
  return getUrl(`post/${slug}`);
}

export function formatPubDate(dateISO: string): string {
  const publishedDate = parseISO(dateISO);
  return format(publishedDate, 'dd MMMM');
}

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomListItem<T>(list: T[]): T {
  const index = getRandomInt(0, list.length - 1);
  return list[index];
}

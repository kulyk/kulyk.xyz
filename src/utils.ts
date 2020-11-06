import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import Config from './config';

function isMobile(): boolean {
  if (!navigator) {
    return false;
  }
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
}

export function getUrl(path: string): string {
  return `${Config.SITE_URL}/${path}`;
}

export function getPostFullUrl(slug: string): string {
  return getUrl(`post/${slug}`);
}

export function formatPubDate(dateISO: string): string {
  const publishedDate = parseISO(dateISO);
  const fmt = isMobile() ? 'dd MMM' : 'dd MMMM';
  return format(publishedDate, fmt);
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

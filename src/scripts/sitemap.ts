import path from 'path';
import sitemap from 'nextjs-sitemap-generator';
import Config from '../config';
import {BASE_DIR, DEST} from './common';

sitemap({
  baseUrl: Config.SITE_URL,
  ignoredExtensions: [
    'js',
    'map',
    'png',
    'jpg',
    'jpeg',
    'svg',
    'ico',
    'mp3',
    'txt',
    'xml',
    'json',
    'ttf',
    'webmanifest',
  ],
  ignoredPaths: ['index', '404'],
  pagesDirectory: path.join(BASE_DIR, '/.next/server/pages'),
  targetDirectory: DEST,
  nextConfigPath: path.join(BASE_DIR, 'next.config.js'),
});

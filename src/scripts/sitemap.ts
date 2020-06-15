import path from 'path';
import sitemap from 'nextjs-sitemap-generator';
import Config from '../config';
import {BASE_DIR, DEST} from './common';

sitemap({
  baseUrl: Config.SITE_URL,
  ignoredExtensions: ['png', 'jpg', 'txt'],
  ignoredPaths: ['404'],
  pagesDirectory: DEST,
  targetDirectory: DEST,
  nextConfigPath: path.join(BASE_DIR, 'next.config.js'),
});

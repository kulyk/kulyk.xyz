import path from 'path';
import sitemap from 'nextjs-sitemap-generator';

const BASE_DIR = path.join(__dirname, '../..');

const DEST = path.join(BASE_DIR, 'out');

sitemap({
  baseUrl: 'https://kulyk.xyz',
  ignoredExtensions: ['png', 'jpg', 'txt'],
  ignoredPaths: ['404'],
  pagesDirectory: DEST,
  targetDirectory: DEST,
  nextConfigPath: path.join(BASE_DIR, 'next.config.js'),
});

const path = require('path');
const sitemap = require('nextjs-sitemap-generator');

const DEST = path.join(__dirname, '../out');

sitemap({
  baseUrl: 'https://kulyk.xyz',
  ignoredExtensions: ['png', 'jpg'],
  ignoredPaths: ['404'],
  pagesDirectory: DEST,
  targetDirectory: DEST,
  nextConfigPath: path.join(__dirname, '../next.config.js'),
});

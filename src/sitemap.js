const path = require('path');
const sitemap = require('nextjs-sitemap-generator');

const ASSETS_PATH = path.join(__dirname, '../public');

sitemap({
  baseUrl: 'https://kulyk.xyz',
  ignoredExtensions: ['png', 'jpg'],
  ignoredPaths: ['404'],
  pagesDirectory: path.join(__dirname, '../out'),
  targetDirectory: ASSETS_PATH,
  nextConfigPath: path.join(__dirname, '../next.config.js'),
});

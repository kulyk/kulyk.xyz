const withPlugins = require('next-compose-plugins');
const withSourceMaps = require('@zeit/next-source-maps');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withPreact = require('next-plugin-preact');

const config = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: 'raw-loader',
    });
    return config;
  },
  async redirects() {
    return [
      {source: '/feed', destination: '/feed.xml', permanent: true},
      {source: '/rss', destination: '/feed.xml', permanent: true},
      {
        source: '/post/:slug',
        destination: '/posts/:slug',
        permanent: true,
      },
      {
        source: '/admin',
        destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        permanent: true,
      },
      {
        source: '/wp-admin',
        destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        permanent: true,
      },
      {
        source: '/wp-admin.php',
        destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        permanent: true,
      },
    ];
  },
};

const plugins = [withPreact, withSourceMaps];

if (process.env.ANALYZE === 'true') {
  plugins.push(withBundleAnalyzer({enabled: true}));
}

module.exports = withPlugins(plugins, config);

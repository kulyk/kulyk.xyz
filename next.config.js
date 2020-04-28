const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@next/bundle-analyzer');

const config = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
};

const plugins = [withCSS];

if (process.env.ANALYZE === 'true') {
  plugins.push(withBundleAnalyzer({enabled: true}));
}

module.exports = withPlugins(plugins, config);

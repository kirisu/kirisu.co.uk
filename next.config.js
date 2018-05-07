var webpack = require('webpack');
const withSass = require('@zeit/next-sass');

const SITE_ROOT = process.env.SITE_ROOT || '';

module.exports = withSass({
  exportPathMap: () => ({
    '/': { page: '/' }
  }),
  assetPrefix: SITE_ROOT,
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        SITE_ROOT: JSON.stringify(SITE_ROOT)
      })
    );

    return config;
  }
});

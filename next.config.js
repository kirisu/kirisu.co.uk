var webpack = require('webpack');
const withSass = require('@zeit/next-sass');

const SITE_ROOT =
  process.env.NODE_ENV === 'production' ? process.env.SITE_ROOT : '';

module.exports = withSass({
  exportPathMap: () => ({
    '/': { page: '/' }
  }),
  assetPrefix: ASSET_PREFIX,
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        ASSET_PREFIX: JSON.stringify(SITE_ROOT)
      })
    );

    return config;
  }
});

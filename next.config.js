var webpack = require('webpack');
const withSass = require('@zeit/next-sass');

const ASSET_PREFIX =
  process.env.NODE_ENV === 'production' ? '//www.kirisu.co.uk' : '';

module.exports = withSass({
  exportPathMap: () => ({
    '/': { page: '/' }
  }),
  assetPrefix: ASSET_PREFIX,
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        ASSET_PREFIX: JSON.stringify(ASSET_PREFIX)
      })
    );

    return config;
  }
});

var webpack = require('webpack');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  exportPathMap: () => ({
    '/': { page: '/' }
  }),
  assetPrefix:
    process.env.NODE_ENV === 'production' ? 'https://kirisu.co.uk' : ''
});

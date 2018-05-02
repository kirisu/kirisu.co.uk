var webpack = require('webpack');
const withSass = require('@zeit/next-sass');

const debug = process.env.NODE_ENV !== 'production';

module.exports = withSass({
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
  assetPrefix: !debug ? 'https://kirisu.github.io/kirisu.co.uk/' : ''
});

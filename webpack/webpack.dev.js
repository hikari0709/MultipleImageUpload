const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    static: {
      directory: './public',
    },
    client: {
      overlay: {
        warnings: true,
        errors: true,
      },
    },
    watchFiles: ['public/index.html', 'public/javascript/index.js', 'public/css/style.css'],
    hot: true,
    open: true,
  },
});

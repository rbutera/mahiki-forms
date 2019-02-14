const path = require('path');
const webpack = require('webpack');

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../src'),
    loader: require.resolve('ts-loader')
  });

  defaultConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  });

  defaultConfig.resolve.extensions.push('.ts', '.tsx');

  defaultConfig.plugins.push(
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      emailjs: 'emailjs-com'
    })
  );

  return defaultConfig;
};

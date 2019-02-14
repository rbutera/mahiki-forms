const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production', // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: './src/index.js', // string | object | array
  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, 'dist'), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: 'mahiki-forms.js', // string
    // the filename template for entry chunks
    publicPath: '/assets/', // string
    // the url to the output directory resolved relative to the HTML page
    library: 'mahikiforms', // string,
    // the name of the exported library
    libraryTarget: 'umd' // universal module definition
    // the type of the exported library
    /* Advanced output configuration (click to show) */
    /* Expert output configuration (on own risk) */
  },
  module: {
    // configuration regarding modules
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, '../src'),
        loader: require.resolve('ts-loader')
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../')
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      emailjs: 'emailjs-com'
    })
  ]
  // list of additional plugins
  /* Advanced configuration (click to show) */
};

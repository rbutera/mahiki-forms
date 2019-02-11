module.exports = function(wallaby) {
  return {
    files: [
      { pattern: 'src/**/*.js', load: false },
      { pattern: 'src/**/*.test.js', ignore: true }
    ],

    tests: [{ pattern: 'src/**/*.test.js', load: false }],

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babelrc: true
      })
    }
  };
};

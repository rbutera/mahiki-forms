module.exports = function(wallaby) {
  return {
    files: ['src/**/*.js', { pattern: 'src/**/*.test.js', ignore: true }],

    tests: ['src/**/*.test.js'],

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babelrc: true
      })
    }
  };
};

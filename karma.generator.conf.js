module.exports = function(karma) {
  karma.set({
        plugins: [
          "karma-jasmine",
          "karma-coverage",
          "karma-chrome-launcher",
          "karma-phantomjs-launcher"
        ],
        frameworks: ["jasmine"],
        files: ["tests/generator/**/*.js"],
        reporters: ["progress", "coverage"],
        browsers: ["Chrome"],
        coverageReporter: {
          type : 'html',
          dir : '.coverage/generator'
        }
    });
}

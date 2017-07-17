module.exports = function(karma) {
  karma.set({
        plugins: [
          "karma-babel-preprocessor",
          "karma-browserify",
          "karma-jasmine",
          "karma-coverage",
          "karma-phantomjs-launcher"
        ],
        frameworks: ["jasmine"],
        files: [
          ".temp/public/components/lodash/dist/lodash.min.js",
          ".temp/public/components/jquery/dist/jquery.min.js",
          ".temp/public/components/bootstrap/dist/js/bootstrap.min.js",
          ".temp/public/components/slick/dist/slick.min.js",
          ".temp/public/components/moment/min/moment.min.js",
          ".temp/public/components/validate/validate.min.js",
          ".temp/public/scripts/**/*.js",
          "tests/ui/**/*.js"
        ],
        babelPreprocessor: {
          options: {
            presets: ['es2015'],
            sourceMap: 'inline'
          },
        },
        preprocessors: {
            "tests/ui/**/*.js": ["babel"]
        },
        reporters: ["progress", "coverage"],
        browsers: ["PhantomJS"],
        coverageReporter: {
          type : 'html',
          dir : '.coverage/ui'
        }
    });
}

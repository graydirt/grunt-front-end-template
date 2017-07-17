
module.exports = function(grunt) {
  const ENV_IS_DEVELOPMENT  = process.env.NODE_ENV === 'development';
  const ENV_IS_PRODUCTION   = process.env.NODE_ENV === 'production';
  const DESTINATION_PATH    = ENV_IS_DEVELOPMENT ? './.temp' : './dist';


  require('load-grunt-tasks')(grunt, {
    pattern: 'grunt-*',
    scope: 'devDependencies'
  });

  grunt.initConfig({
    project: {
      DESTINATION_PATH : DESTINATION_PATH
    },
    /* ========================= */
    assemble: {
      options: {
        layoutdir: 'src/views/_layouts',
        layout: 'default.hbs',
        partials: 'src/views/_partials/**/*.hbs',
        data: ['src/data/**/*.json']
      },
      mainTemplate: {
        options: {
          layout: 'default.hbs'
        },
        expand: true,
        cwd: 'src/views/pages',
        src: ['index.hbs'],
        dest: DESTINATION_PATH
      },
      otherTemplate: {
        options: {
          layout: 'otherTemplate.hbs'
        },
        expand: true,
        cwd: 'src/views/pages',
        src: ['!index.hbs', '*.hbs'],
        dest: DESTINATION_PATH
      }
    },
    /* ========================= */
     browserify: {
       options: {
          transform: [
             ['babelify', {
                presets: ['es2015']
             }]
          ]
       },
       dev: {
         options: {
           browserifyOptions: {
             debug: true
           }
         },
         files: {
           '.temp/public/scripts/site.js' : 'src/public/scripts/**/*.js'
         }
       },
       build: {
         files: {
           'dist/public/scripts/site.js' : 'src/public/scripts/**/*.js'
         }
       }
     },
    /* ========================= */
    browserSync: {
      bsFiles: {
        src: [
          DESTINATION_PATH + '/**/*.html',
          DESTINATION_PATH + '/public/scripts/**/*.js',
          DESTINATION_PATH + '/public/styles/**/*.css',
          DESTINATION_PATH + '/public/images/*'
        ]
      },
      options: {
        watchTask: true,
        server: DESTINATION_PATH
      }
    },
    /* ========================= */
    concurrent: {
      target: {
        options: {
          logConcurrentOutput: true
        },
        tasks: ['watch']
      }
    },
    /* ========================= */
    copy: {
      components: {
        files: [{
          expand: true,
          cwd: 'src',
          src: 'public/components/**/*',
          dest: DESTINATION_PATH
        }]
      },
      images: {
        files: [{
          expand: true,
          cwd: 'src',
          src: 'public/images/**/*',
          dest: DESTINATION_PATH
        }]
      },
      //styles: {
       // files: [{
       //   expand: true,
       //   cwd: 'src',
       //   src: 'public/styles/**/*.css',
       //   dest: DESTINATION_PATH
       // }]
      //},
	  //scripts: {
		//files: [{
		//	expand: true,
		//	cwd: 'src',
		//	src: 'public/scripts/**/*.js',
		//	dest: DESTINATION_PATH
		//}]
	  //},
      videos: {
        files: [{
          expand: true,
          cwd: 'src',
          src: 'public/videos/**/*',
          dest: DESTINATION_PATH
        }]
      }
    },
    /* ========================= */
    clean: {
      cwd:         [DESTINATION_PATH],
      contents:    [DESTINATION_PATH + '/**/*.html'],
      images:      [DESTINATION_PATH + '/public/images/*'],
      scripts:     [DESTINATION_PATH + '/public/scripts/*'],
      //allScripts:  [DESTINATION_PATH + '/public/scripts/*', DESTINATION_PATH + '/public/components/*'],
      //styles:      [DESTINATION_PATH + '/public/styles/*'],
      fs:          ['.temp', '.sass-cache', '.coverage', 'dist']
    },
    /* ========================= */
    karma: {
      ui: {
        configFile: 'karma.ui.conf.js'
      },
      generator: {
        configFile: 'karma.generator.conf.js'
      }
    },
    /* ========================= */
     sass: {
       default: {
         options: {
           style: 'expanded'
         },
         files: {
           '<%= project.DESTINATION_PATH %>/public/styles/main.css' : 'src/public/styles/main.scss'
         }
       }
     },
    /* ========================= */
    watch: {
      babel: {
        files: 'src/public/scripts/**/*.js',
        tasks: ['clean:scripts','browserify:dev']
      },
      data: {
        files: ['src/data/**/*.json','!src/data/generated/*.json'],
        tasks: ['assemble']
      },
      hbs: {
        files: 'src/**/*.hbs',
        tasks: ['assemble']
      },
      styles: {
        files: 'src/public/styles/**/*.scss',
        tasks: ['sass']
      },
      images: {
        files: 'src/public/images/*',
        tasks: ['newer:copy:images']
      }
    }
  });


  grunt.registerTask('dev', [
     'clean:cwd',
     'copy',
     'assemble',
     'sass',
     'browserify',
     'browserSync',
     'concurrent:target',
   ]);

   grunt.registerTask('build', [
     'clean:cwd',
     'copy',
     'assemble',
     'sass',
     'browserify',
   ]);
};

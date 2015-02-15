module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
		clean: {
			build: {
				src: ['build/*', 'tmp/']
			}
		},
		sprite: {
			build: {
				src: ['src/images/*.png', '!src/images/logo-pattern.png'],
				destImg: 'tmp/images/sprite.png',
				destCSS: 'src/css/sprite.scss',
				imgPath: 'images/sprite.png',
				engine: 'phantomjs'
			}
		},
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
				report: 'min',
				mangle: false
      },
      build: {
        src: ['src/js/spectrum.js', 'src/js/jquery.spectrum-es.js', 'src/js/script.js'],
        dest: 'build/script.js'
      }
    },
		sass: {
			build: {
				files: {
					'src/style/style.css': 'src/style/style.scss'
				}
			}
		},
		cssmin: {
			options: {
				report: 'min'
			},
			build: {
				src: ['src/style/spectrum.css', 'src/style/style.css'],
				dest: 'build/style.css'
			}
		},
		imagemin: {
			build: {
				files: {
					'build/images/sprite.png': 'tmp/images/sprite.png',
					'build/images/logo-pattern.png': 'src/images/logo-pattern.png'
				}
			}
		},
		processhtml: {
			build: {
				files: {
					'build/index.html': ['src/index.html']
				}
			}
		},
		copy: {
			html: {
				expand: true,
				cwd: 'src',
				src: '*.html',
				dest: 'build/',
				filter: 'isFile'
			}/*,
			fonts: {
				expand: true,
				cwd: 'src',
				src: 'fonts/*',
				dest: 'build/'
			},
			screenshot: {
				expand: true,
				cwd: 'src',
				src: 'screenshot.png',
				dest: 'build/',
				filter: 'isFile'
			}*/
		}
  });
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-sass');
  // Default task(s).
  //grunt.registerTask('default', ['clean', 'sprite', 'uglify', 'sass', 'cssmin', 'imagemin', 'copy']);
  grunt.registerTask('default', ['clean', 'uglify', 'sass', 'cssmin', 'processhtml', 'copy']);

};

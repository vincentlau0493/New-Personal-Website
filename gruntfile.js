module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	//project configuration
	grunt.initConfig({
		uglify: {
			my_target: {
				options: {
					beautify: false
				},
				files: {
					"js/output.js":["_/js/*.js"]
				}
			}
		}, //uglify
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				}
			}
		}, //compass
		watch: {
			options: {
				livereload:true
			},
			script: {
				files: ["_/js/*.js"],
				tasks: ["uglify"]
			}, //script
			sass: {
				files: ["_/sass/*.scss"],
				tasks: ["compass"]
			}, //sass
			html: {
				files: ['*.html']
			} //html
		} //watch
	}); //config

	// Default task(s).
	grunt.registerTask('default', ['watch']);





}// module
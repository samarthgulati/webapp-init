module.exports= function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'js/script.js': ['components/js/*.js']
				}
			}
		},
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				}
			}
		},
		watch: {
			options: {livereload: true},
			scripts: {
				files: ['components/js/*.js'],
				tasks: ['uglify']	
			},
			sass: {
				files: ['components/sass/*.scss'],
				tasks: ['compass:dev']
			},
			html: {
				files: ['*.html']
			}
		}
		})
	grunt.registerTask('default', 'watch');
}
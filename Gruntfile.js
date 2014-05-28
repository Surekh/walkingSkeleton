module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: [
				'**/*.js',
				'!node_modules/**/*'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		browserify: {
			standalone: {
				src: [ '<%= pkg.name %>.js' ],
				dest: 'dist/<%= pkg.name %>.standalone.js',
				options: {
					standalone: '<%= pkg.name %>'
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-browserify');

	grunt.registerTask('default',[
		'jshint',
		'browserify'
	]);
};
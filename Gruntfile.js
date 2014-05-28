module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['Gruntfile.js','app/js/*'],
			options: {
				quotmark: 'single',
				camelcase: true,
				curly: true,
				eqeqeq: true,
				indent: true,
				latedef: true,
				immed: true,
				newcap: true,
				undef: true,
				unused: true,
				node: true,
				trailing: true
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

	grunt.registerTask('default',['jshint','browserify']);
};
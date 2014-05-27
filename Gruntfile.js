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
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default',['jshint']);
};
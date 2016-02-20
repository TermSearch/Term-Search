module.exports = function (grunt) {

	// load plugins
	[
		'grunt-cafe-mocha',
		'grunt-contrib-jshint',
		'grunt-exec'
	].forEach(function (task) {
		grunt.loadNpmTasks(task);
	});

	// configure plugins
	grunt.initConfig({
		cafemocha: {
			all: {
				src: 'qa/tests-*.js',
				options: {
					ui: 'tdd',
					timeout: 4000
				},
			},
			units: {
				src: 'qa/tests-unit.js',
				options: {
					ui: 'tdd',
					timeout: 4000
				},
			},
			database: {
				src: 'qa/tests-database-*.js',
				options: {
					ui: 'tdd',
					timeout: 4000
				},
			},
		},
		jshint: {
			options: {
		 		jshintrc: true
 			},
			app: ['app.js', 'public/js/**/*.js',
				'lib/**/*.js'
			],
			qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js'],
		},
		exec: {
			linkchecker: {
				cmd: 'linkchecker -r 2 http://localhost:3000'
			}
		}

	});

	// register tasks
	grunt.registerTask('default', ['cafemocha:all', 'jshint']);
	grunt.registerTask('links', ['exec']);
	grunt.registerTask('units', ['cafemocha:units']);
	grunt.registerTask('database', ['cafemocha:database']);

};

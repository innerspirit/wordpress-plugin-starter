var path = require('path');

module.exports = function(grunt) {

    var project_name = path.basename(__dirname);

    grunt.initConfig({

        jshint: {
            files: ['Gruntfile.js', 'assets/src/js/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },

        uglify: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/src/js',
                    src: '**/*.js',
                    dest: 'assets/dist/js',
                    ext: '.min.js'
                }]
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compact'
                },
                files: [{
                    expand: true,
                    cwd: 'assets/src/scss/main',
                    src: ['**/*.scss'],
                    dest: 'assets/dist/css',
                    ext: '.css'
                }]
            }
        },

        watch: {
            scripts: {
                files: ['assets/src/js/**/*.js'],
                tasks: ['jshint', 'uglify'],
                options: { spawn: false }
            },
            styles: {
                files: ['assets/src/scss/**/*.scss'],
                tasks: ['sass'],
                options: { spawn: false }
            }
        },

        addtextdomain: {
            options: {
                i18nToolsPath: '',
                textdomain: project_name,
                updateDomains: ['wordpress-plugin-starter']
            },
            target: {
                files: {
                    src: [ 'include/**/*.php' ]
                }
            }
        },

        makepot: {
            target: {
                options: {
                    type: 'wp-plugin',
                    mainFile: project_name + '.php',
                    domainPath: '/languages'
                }
            }
        }

    });

    // development tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-wp-i18n');

    // register watch task
    grunt.registerTask('default', ['watch']);
    // register build task
    grunt.registerTask('build', ['jshint', 'uglify', 'sass', 'makepot']);

};

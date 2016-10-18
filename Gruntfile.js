var path = require('path');

module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['Gruntfile.js', 'assets/src/js/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },

        uglify: {
            options: {
                banner: '/**\n' +
                        '* Package: <%= pkg.name %> - v<%= pkg.version %> \n' +
                        '* Description: <%= pkg.description %> \n' +
        				'* Last build: <%= grunt.template.today("yyyy-mm-dd") %> \n' +
						'* @author <%= pkg.author %> \n' +
						'* @license <%= pkg.license %> \n'+
                        '*/\n'
            },
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

        // addtextdomain: {
        //     options: {
        //         i18nToolsPath: 'tools/i18n/',
        //         textdomain: '<%= pkg.name %>',
        //         updateDomains: ['wordpress-plugin-starter']
        //     },
        //     target: {
        //         files: {
        //             src: [ 'include/**/*.php' ]
        //         }
        //     }
        // },

        makepot: {
            target: {
                options: {
                    type: 'wp-plugin',
                    mainFile: '<%= pkg.name %>.php',
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

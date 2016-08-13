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
                    cwd: 'assets/src/scss',
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

    // register build task
    grunt.registerTask('build', ['jshint', 'uglify', 'sass', 'makepot']);

};

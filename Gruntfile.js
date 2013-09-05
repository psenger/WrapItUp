'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*\n'+
                ' * <%= pkg.title || pkg.name %> - v<%= pkg.version %> \n' +
                ' * <%= grunt.template.today("yyyy-mm-dd") %> \n' +
                ' * <%= pkg.homepage %> \n' +
                ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> \n' +
                ' * Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n' +
                ' */\n',
        clean: {
            build: {
                src: ['dist']
            },
            doc: {
                src: ['doc']
            }
        },
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                dest: 'dist/<%= pkg.name %>.js',
                src: [ "src/intro.js",
                       "src/core.js",
                       "src/outro.js"]
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        qunit: {
            all: {
                options: {
                    urls: [ '1.10.2', '1.9.1', '1.8.3', '1.7.2', '1.6.4', '1.5.2', '1.4.4'  ].map(function (version) {
                        return 'http://localhost:8080/test/test.html?jquery=' + version;
                    }).concat([ '1.10.2', '1.9.1', '1.8.3', '1.7.2', '1.6.4', '1.5.2', '1.4.4'  ].map(function (version) {
                            return 'http://localhost:8080/test/test.min.html?jquery=' + version;
                        }))
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './'
                }
            }
        },
        jshint: {
            src: {
                options: {
                    jshintrc: 'src/.jshintrc'
                },
                src: [ 'src/core.js' ]
            }
        },
        jsdoc: {
            dist: {
                src: [ 'src/core.js' ],
                options: {
                    destination: 'doc'
                }
            }
        },
        watch: {
            scripts: {
                files: [ 'test/*.js', 'test/*.html', 'src/*.js', 'Gruntfile.js' ],
                tasks: [ 'doc'  ]
            }
        }
    });

    // All of These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsdoc');

    grunt.registerTask('default', [ 'clean:build', 'jshint', 'concat', 'uglify', 'connect', 'qunit' ]);
    grunt.registerTask('doc', [ 'clean:doc','jsdoc' ]);

};

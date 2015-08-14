/**
 * Created by Guoxing.han on 2015/7/7 0007.
 */
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //clean: {
        //    all: ['dist/*']
        //},

        less: {
            task1: {
                options: {
                    compress   : false,
                    yuicompress: false
                },
                expand : true,
                src    : ['styles/*.less'],
                dest   : './',
                ext    : '.css'
            }
        },

        concat: {
            options: {
                //separator: ';',

                banner: '/* \n *@name: <%= pkg.name %>\n *@author: <%= pkg.author %>\n *@version: <%= pkg.version %>\n *@date: <%= grunt.template.today("dd-mm-yyyy") %>\n*/\n'
            },
            page   : {
                src : ['public/src/**/*.js', '!public/src/combo.js'],
                dest: 'dist/public/build/<%= pkg.version %>/treeBear-ui.js'
            }
        },

        jshint    : {
            //files: ['src/pages/<%= grunt.config.get("page") %>/*.js'],
            files: {
                options: {
                    force  : true,
                    globals: {
                        jQuery : true,
                        console: true,
                        module : true
                    }
                },
                src    : ['public/src/**/*.js', 'public/scripts/common.js']
            }

        },
        copy      : {

            files: {
                src   : [
                    'bower_components/**/**/jquery.min.js',
                    'public/scripts/*.js',
                    'public/styles/*.css',
                    'public/tools/*',
                    'public/tools/**/*',
                    'public/src/**/*',
                    '!public/src/combo.*',
                    'favicon.ico'
                ],
                dest  : 'dist/',
                filter: 'isFile'
            }

        },
        uglify    : {
            common: {

                options: {
                    banner: '/* \n *@name: <%= pkg.name %>\n *@author: <%= pkg.author %>\n *@version: <%= pkg.version %>\n *@date: <%= grunt.template.today("dd-mm-yyyy") %>\n*/\n'
                },
                files  : [{
                    expand: true,
                    src   : ['dist/public/build/**/treeBear-ui.js', 'dist/public/scripts/common.js'],
                    //dest  : '',
                    ext   : '.min.js'
                }]
            }
        },
        css_combo : {
            options: {
                banner: '/* \n *@name: <%= pkg.name %>\n *@author: <%= pkg.author %>\n *@version: <%= pkg.version %>\n *@date: <%= grunt.template.today("dd-mm-yyyy") %>\n*/\n'
            },
            page   : {
                src : 'public/src/combo.css',
                dest: 'dist/public/build/<%= pkg.version %>/treeBear-ui.css'
            }
        },
        cssmin    : {

            common: {
                options: {
                    banner: '/* \n *@name: <%= pkg.name %>\n *@author: <%= pkg.author %>\n *@version: <%= pkg.version %>\n *@date: <%= grunt.template.today("dd-mm-yyyy") %>\n*/\n'
                },
                files  : [{
                    expand: true,
                    src   : ['dist/public/build/<%= pkg.version %>/treeBear-ui.css', 'dist/public/styles/common.css'],
                    //dest  : 'dist',
                    ext   : '.min.css'
                }]
            }
        },
        imagemin  : {
            common: {
                files: [{
                    expand: true,
                    src   : ['public/images/*.{png,jpg,gif,jpeg}', 'public/images/**/*.{png,jpg,gif,jpeg}'],
                    dest  : 'dist'
                }]
            }

        },
        dom_munger: {
            index     : {
                options: {
                    remove : ['script[data-remove!="false"]', 'link[data-remove!="false"]'],
                    append : [
                        {
                            selector: 'body',
                            html    : '<script type="text/javascript" src="public/scripts/prettify.js"></script>' +
                            '<script type="text/javascript" src="public/scripts/jquery.nav.min.js"></script>' +
                            '<script type="text/javascript" src="public/scripts/common.min.js"></script>'
                        }
                    ],
                    prepend: [
                        {
                            selector: 'head',
                            html    : '<link rel="stylesheet" href="public/styles/prettify.css" type="text/css"/>' +
                            '<link rel="stylesheet" href="public/styles/common.min.css" type="text/css"/>' +
                            '<link rel="stylesheet" href="public/tools/font-awesome.min.css" type="text/css"/>' +
                            '<link rel="stylesheet" href="public/build/0.0.1/treeBear-ui.min.css" type="text/css"/>' +
                            '<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>' +
                            '<script type="text/javascript" src="public/build/0.0.1/treeBear-ui.min.js"></script>'
                        }
                    ]
                },
                src    : 'index.html',
                dest   : 'dist/index.html'
            },
            css       : {
                options: {
                    remove : ['script[data-remove!="false"]', 'link[data-remove!="false"]'],
                    append : [
                        {
                            selector: 'body',
                            html    : '<script type="text/javascript" src="public/scripts/prettify.js"></script>' +
                            '<script type="text/javascript" src="public/scripts/jquery.nav.min.js"></script>' +
                            '<script type="text/javascript" src="public/scripts/common.min.js"></script>'
                        }
                    ],
                    prepend: [
                        {
                            selector: 'head',
                            html    : '<link rel="stylesheet" href="public/styles/prettify.css" type="text/css"/>' +
                            '<link rel="stylesheet" href="public/styles/common.min.css" type="text/css"/>' +
                            '<link rel="stylesheet" href="public/tools/font-awesome.min.css" type="text/css"/>' +
                            '<link rel="stylesheet" href="public/build/0.0.1/treeBear-ui.min.css" type="text/css"/>' +
                            '<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>' +
                            '<script type="text/javascript" src="public/build/0.0.1/treeBear-ui.min.js"></script>'
                        }
                    ]
                },
                src    : 'css.html',
                dest   : 'dist/css.html'
            },
            javascript: {
                options: {
                    remove : ['script[data-remove!="false"]', 'link[data-remove!="false"]'],
                    append : [
                        {
                            selector: 'body',
                            html    : '<script type="text/javascript" src="public/scripts/prettify.js"></script>' +
                            '<script type="text/javascript" src="public/scripts/jquery.nav.min.js"></script>' +
                            '<script type="text/javascript" src="public/scripts/common.min.js"></script>'

                        }
                    ],
                    prepend: [
                        {
                            selector: 'head',
                            html    : '<link rel="stylesheet" href="public/styles/prettify.css" type="text/css"/>' +
                            '<link rel="stylesheet" href="public/styles/common.min.css" type="text/css"/>' +
                            '<link rel="stylesheet" href="public/tools/font-awesome.min.css" type="text/css"/>' +
                            '<link rel="stylesheet" href="public/build/0.0.1/treeBear-ui.min.css" type="text/css"/>' +
                            '<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>' +
                            '<script type="text/javascript" src="public/build/0.0.1/treeBear-ui.min.js"></script>'
                        }
                    ]
                },
                src    : 'javascript.html',
                dest   : 'dist/javascript.html'
            }

        },

        htmlmin: {
            options: {
                removeComments    : true,
                collapseWhitespace: true
            },
            html   : {
                files: [{
                    expand: true,
                    cwd   : 'dist',
                    src   : ['*.html'],
                    dest  : 'dist'
                }]
            }
        },

    });

    /**
     * 载入使用到的通过NPM安装的模块
     */
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    /**
     * 注册基本任务
     */

    grunt.registerTask('build', [
        //'less:task1',
        'concat:page',
        'jshint:files',
        'copy:files',
        'uglify:common',
        'imagemin:common',
        'css_combo:page',
        'cssmin:common',
        'dom_munger:index',
        'dom_munger:css',
        'dom_munger:javascript',
        'htmlmin'
    ]);
    grunt.registerTask('dist', ['build']);
}
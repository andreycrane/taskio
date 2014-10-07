module.exports = function(grunt) {
    'use strict';
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        concat: {
            options: {
                separator: '\n/*--------------*/\n'
            },
            
            dist: {
                src: "<%= concat_files %>",
                dest: 'js/build.js'
            }
        },
        
        uglify: {
            options: {
                preserveComments: false
            },
            
            build: {
                files: {
                    'js/build.min.js': 'js/build.js'
                }
            }
        },
        
        less: {
            style: {
                options: {
                    cleancss: true
                },
                
                files: {
                    "css/dst/style.min.css": "css/src/style.less"
                }
            }
        },
        
        copy: {
            styles: {
                src: 'css/dst/style.min.css',
                dest: 'css/style.min.css'
            }
        },
                
        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },
            
            styles: {
                files: ['css/src/*.less'],
                tasks: ['less:style', 'copy:styles']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['less:style']);
    grunt.registerTask('build', ['concat:dist', 'uglify:build']);
    
    grunt.registerTask("html_build", "Build production version", function () {
        var fileStr = grunt.file.read("index.html", { encoding: "utf8"}),
            expr,
            result,
            filesArray,
            indexA,
            indexB,
            begin = "<!-- begin -->",
            end = "<!-- end -->",
            repl,
            buildHtml;
            
        
        expr = /<script src="(.*)"><\/script>/g;
        filesArray = [];
        indexA = fileStr.indexOf(begin);
        indexB = fileStr.indexOf(end) + end.length;
        
        repl = fileStr.substring(indexA, indexB);
        
        while(true) {
            result = expr.exec(fileStr);
            
            if (result) {
                filesArray.push(result[1]);
            } else {
                break;
            }
        }
        
        buildHtml = fileStr.replace(repl,
            '<script src="js\\build.min.js"><\/script>');
        grunt.file.write("index_build.html", buildHtml, { encoding: "utf8" });
        
        grunt.config.set("concat_files", filesArray);
        grunt.task.run("concat:dist");
        grunt.task.run("uglify:build");
    });
};
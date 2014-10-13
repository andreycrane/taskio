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
            },

            development: {
                src: 'index.html',
                dest: '../templates/home/index.html.ep'
            },
            
            production: {
                src: 'index_build.html',
                dest: '../templates/home/index.html.ep'
            }
        },
                
        watch: {
            grunt: {
                files: ['Gruntfile.js'],
                tasks: ['manifest']
            },
            
            styles: {
                files: ['css/src/*.less'],
                tasks: ['less:style', 'copy:styles', 'manifest']
            },
            
            html: {
                files: ['index.html'],
                tasks: ['copy:development', 'manifest']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['less:style', 'manifest']);
    
    grunt.registerTask("build:production", "Build production version", function () {
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
            '<script src="js\/build.min.js"><\/script>');
        buildHtml = buildHtml.replace('<html>', 
            '<html manifest="cache.manifest">');
        grunt.file.write("index_build.html", buildHtml, { encoding: "utf8" });
        
        grunt.config.set("concat_files", filesArray);
        grunt.task.run("concat:dist");
        grunt.task.run("uglify:build");
        grunt.task.run("manifest");
    });


    grunt.registerTask("manifest", "Generate manifest file", function() {
        var version = "# Task.IO cache v." + Date.now(),
            content = [
                "CACHE MANIFEST",
                version,
                // Cache
                "CACHE:",
                // Index
                "index.html",
                // Styles
                "css/style.min.css",
                "css/normalize.css",
                "css/pure-nr-min.css",
                "css/jquery.datatimepicker.css",
                "css/fullcalendar.css",
                // Images
                "img/edit.svg",
                "img/del.svg",
                // JavaScript
                "js/build.min.js",
                // Templates
                "templates/calendar_projects.html",
                "templates/calendar_template.html",
                "templates/delete_project_modal.html",
                "templates/home_template.html",
                "templates/login_template.html",
                "templates/project.html",
                "templates/project_modal.html",
                "templates/projects.html",
                "templates/report_template.html",
                "templates/settings_template.html",
                "templates/task.html",
                "templates/task_modal.html",
                "templates/tasks.html",
                // fonts
                "fonts/BEBAS.ttf",
                // NETWORK
                "NETWORK:",
                "/tasks",
                "/projects"
            ].join("\n");
       
        grunt.file.write('./cache.manifest', content);
        grunt.log.ok(version); 
    });
};

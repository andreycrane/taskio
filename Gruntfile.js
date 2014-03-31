module.exports = function(grunt) {
    'use strict';
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
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
    
    
    grunt.registerTask('default', ['less:style']);        
};
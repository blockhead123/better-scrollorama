module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        replace: {
            example: {
                src: ['src/basic/index.html'],             // source files array (supports minimatch)
                dest: 'dist/basic/',             // destination directory or file
                replacements: [{
                    from: 'better-scrollorama.js',                   // string replacement
                    to: 'better-scrollorama.min.js'
                },{
                    from: 'better-scrollorama.css',                   // string replacement
                    to: 'better-scrollorama.min.css'
                }]
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/basic/js/bvs.min.js': ['src/basic/js/better-scrollorama.js']
                }
            }
        },
        cssmin : {
            styles: {
                src: ['src/basic/css/better-scrollorama.css'],
                dest: 'dist/basic/css/better-scrollorama.min.css'
            }
        }
    });
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['replace', 'uglify', 'cssmin']);

};
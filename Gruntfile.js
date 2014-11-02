'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jscs');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true
      },
      all: ['Gruntfile.js', 'api_test.js', 'server.js']
    },

    jscs: {
      all: {
        options: {
          'standard': 'airbnb',
          jscsrc: true
        },
        files: {
          src: ['Gruntfile.js', 'server.js']
        }
      }
    },

    simplemocha: {
      all: ['test/*.js']
    }
  });

  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha']);
  grunt.registerTask('default',  ['test']);
};

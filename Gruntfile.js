module.exports = function(grunt) {

grunt.initConfig({
  exec: {
    build: {
      cmd: 'bundle exec jekyll build'
    },
    serve: {
      cmd: 'bundle exec jekyll serve --watch'
    },
    deploy: {
      cmd: 'fab deploy'
    }
  }
});

grunt.loadNpmTasks('grunt-exec');

grunt.registerTask('default', [ 'exec:build' ]);
grunt.registerTask('serve', [ 'exec:serve' ]);
grunt.registerTask('deploy', [ 'exec:build', 'exec:deploy' ]);

};

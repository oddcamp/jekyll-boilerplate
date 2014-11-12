module.exports = function(grunt) {

grunt.initConfig({
  exec: {
    build: {
      cmd: 'bundle exec jekyll b'
    },
    serve: {
      cmd: 'bundle exec jekyll s --config _config.yml,_config-dev.yml'
    },
    deploy: {
      cmd: 'fab deploy'
    }
  }
});

grunt.loadNpmTasks('grunt-exec');

grunt.registerTask('default', [ 'exec:build' ]);
grunt.registerTask('build', [ 'exec:build' ]);
grunt.registerTask('serve', [ 'exec:serve' ]);
grunt.registerTask('deploy', [ 'exec:build', 'exec:deploy' ]);

};

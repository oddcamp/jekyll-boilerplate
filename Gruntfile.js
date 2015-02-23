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
      cmd: "rsync -avz --delete --exclude '.git*' --exclude '.DS_Store' --exclude '.sass-cache*' dist/ root@server:/var/www/site"
    }
  }
});

grunt.loadNpmTasks('grunt-exec');

grunt.registerTask('default', [ 'exec:serve' ]);
grunt.registerTask('build', [ 'exec:build' ]);
grunt.registerTask('deploy', [ 'exec:build', 'exec:deploy' ]);

};

module.exports = {
  proxy: 'localhost:3000',
  files: ['**/*.css', '**/*.pug', '**/*.js', '**/*.ts'],
  ignore: ['node_modules'],
  reloadDelay: 10,
  ui: false,
  notify: false,
  port: 5555
};

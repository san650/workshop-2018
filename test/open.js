const cypress = require('cypress');
const nodemon = require('nodemon');

nodemon({
  script: 'index.js',
  ext: 'js',
  env: {
    "PORT": 3001
  }
});


cypress.open().then(process.exit);
nodemon.on('start', function () {
  console.log('Nodemon started');
}).on('quit', function () {
  console.log('Nodemon stopped');
  process.exit();
}).on('restart', function (files) {
  console.log('Nodemon restarted due to: ', files);
});

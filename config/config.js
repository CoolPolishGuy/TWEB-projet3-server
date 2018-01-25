const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'mvc'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mvc-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'mvc'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mvc-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'mvc'
    },
    port: process.env.PORT || 3000,
    //db: 'mongodb://localhost/mvc-production'
    db:'mongodb://heroku_22vqmgnk:nej7crcpd47l924pjfsklmb917@ds025603.mlab.com:25603/heroku_22vqmgnk'
  }
};

module.exports = config[env];

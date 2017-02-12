require('babel-register');

require('dotenv').config({
  silent: true, // suppress warning if no .env file is present
});

//const startCluster = require('./lib/pal-utils/start-cluster');
const server = require('./server');

if (process.env.NODE_ENV === 'development') {
  server();
} else {
  //startCluster();
}
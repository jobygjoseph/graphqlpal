require('babel-register');
require('dotenv').config({
  silent: true, // suppress warning if no .env file is present
});

const cp = require('child_process');

if (process.NODE_ENV !== 'production') {
  try {
    const result = cp.execSync('git rev-parse --short HEAD', { encoding: 'utf-8' });
    process.lastCommit = result.slice(0, 7);
  } catch (e) {
    //
  }
}

//const startCluster = require('./lib/pal-utils/start-cluster');
const server = require('./lib/server');

if (process.env.NODE_ENV === 'development') {
  server();
} else {
  //startCluster();
}
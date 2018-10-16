// config/index.js

const dbName = 'asif-mern-app';
const dbUser = 'asifvora';
const dbPassword = 'asifvora2743';

const MONGODB_URI = `mongodb://${dbUser}:${dbPassword}@ds047207.mlab.com:47207/${dbName}`;

// heroku config:set MONGODB_URI=mongodb://asifvora:asifvora2743@ds047207.mlab.com:47207/asif-mern-app -a quiet-sands-79740
// heroku config:get MONGODB_URI --app quiet-sands-79740

module.exports = MONGODB_URI;


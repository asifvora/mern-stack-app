// config/index.js

const dbName = 'asif-mern-app';
const dbUser = 'mern-app-asif';
const dbPassword = '2743@zoya';

const MONGODB_URI = `mongodb://${dbUser}:${dbPassword}@ds125453.mlab.com:25453/${dbName}`;

module.exports = MONGODB_URI;


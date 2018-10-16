// index.js

const router = require('express').Router();
const bookRoutes = require('./books');

router.use('/api/books', bookRoutes);

module.exports = router;
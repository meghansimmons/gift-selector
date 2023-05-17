const router = require('express').Router();
const apiRoutes = require('./api');
const pages = require('./pages')

//localhost:3001/
router.use('/', pages);

//localhost:3001/api
router.use('/api', apiRoutes);

module.exports = router;

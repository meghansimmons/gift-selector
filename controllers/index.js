const router = require('express').Router();
const pages = require('./pages')
const apiRoutes = require('./api');

const savedGiftsRoutes = require('./api/savedgift');


// included the specific routes to index
//localhost:3001/
router.use('/', pages);
//localhost:3001/api
router.use('/api', apiRoutes);
//localhost:3001/saved
router.use('/saved', savedGiftsRoutes);


module.exports = router;


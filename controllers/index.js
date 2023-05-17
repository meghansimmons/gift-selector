const router = require('express').Router();
const apiRoutes = require('./api');
const savedGiftsRoutes = require('./api/savedgift');
// included the specif routes to index

router.use('/api', apiRoutes);
router.use('/api', savedGiftsRoutes);

module.exports = router;
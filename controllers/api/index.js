const router = require('express').Router();

const userRoutes = require('./userroutes');
router.use('/user', userRoutes);

const giftRoutes = require('./gift-routes');
router.use('/gifts', giftRoutes);

const eventRoutes = require('./eventroutes');
router.use('/event', eventRoutes);

module.exports = router;
const router = require('express').Router();
// included the specific routes to index
//localhost:3001/
const giftRoutes = require('./pages/gift');
router.use('/gift', giftRoutes);

router.get('/', (req, res) => {
    res.render('gift');
});

router.get('/dashboard', (req, res) =>{

});

module.exports = router;
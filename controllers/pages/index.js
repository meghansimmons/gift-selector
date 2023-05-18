const router = require('express').Router();

const loginRoutes = require('./login');
router.use('/login', loginRoutes);

const giftSelectionRoutes = require('./giftselection');
router.use('/giftSelection', giftSelectionRoutes);


router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/savedgift', (req, res) =>{
    res.render('gift');
})

module.exports = router;

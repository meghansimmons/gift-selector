const router = require('express').Router();

const loginRoutes = require('./login');
router.use('/login', loginRoutes);



router.get('/', (req, res) => {
    res.render('homepage');
});


module.exports = router;
const router = require('express').Router();
// included the specific routes to index
//localhost:3001/dashboard

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/dashboard', (req, res) =>{
    res.render('gift');

});

module.exports = router;
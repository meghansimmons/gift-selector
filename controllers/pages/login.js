const router = require('express').Router();


router.get('/', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.logged_in) {
    
    res.redirect('/');
    return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
  });

  module.exports = router;


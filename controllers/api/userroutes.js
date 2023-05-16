const router = require('express').Router();
const { User } = require('../../models');


//new user
router.post('/', async (req, res) => {
    try {
        const saveUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(201).json(saveUser);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router;
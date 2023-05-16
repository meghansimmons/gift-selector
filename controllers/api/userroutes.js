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

//login

router.post('/login', async (req, res)=> {
    try {
        const getUserData = await User.findOne({
            where: { email: req.body.email } 
        });

        if(!getUserData) {
            res.status(400).json({message: 'Email and password do not match, please try again.'});
            return;
        }

        const checkedPassword = await getUserData.checkPassword(req.body.password);

        if (!checkedPassword) {
            res.status(400).json({ message: 'Email and password do not match, please try again.'});
            return;
        }

        req.session.save(()=> {
            req.session.user_id = getUserData.id;
            req.session.logged_in = true;
            res.json({ user: getUserData, message: 'Logged in!' });
        });

    } catch (err) {
       return res.status(400).json(err);
    }
});






module.exports = router;
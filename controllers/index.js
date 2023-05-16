const router = require('express').Router();
const users = require('./api/users');

// localhost:3001/
router.get('/', (req, res)=> {
    res.json("HI!");
})
// localhost:3001/users

router.use("/users", users);


module.exports = router;
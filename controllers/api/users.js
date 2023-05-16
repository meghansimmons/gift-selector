const router = require("express").Router();
const { User } = require('../../models');
// localhost:3001/users
router.get('/', (req, res) => {
    res.json("From the user folder!");
})


module.exports = router;
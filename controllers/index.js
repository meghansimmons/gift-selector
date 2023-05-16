const router = require('express').Router();
<<<<<<< HEAD
const users = require('./api/users');

// localhost:3001/
router.get('/', (req, res)=> {
    res.json("HI!");
})
// localhost:3001/users

router.use("/users", users);


module.exports = router;
=======
const apiRoutes = require('./api');

router.use('/api', apiRoutes);


router.get('/users', async (req, res) => {
    
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  });
  
  router.post('/users', async (req, res) => {
    
    try {
      const { username, email, password } = req.body;
      const newUser = await User.create({ username, email, password });
      res.status(200).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  });

module.exports = router;
>>>>>>> 582509652cd7cd2551bcc93bbc2743c2175280dc

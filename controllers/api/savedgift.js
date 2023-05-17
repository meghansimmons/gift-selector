const express = require('express');
const router = express.Router();
const { SavedGift } = require('../../models');
//added dependencies for the new file to correspond wiht the savedgifts.js in the models folder hope im doing this right 

router.get('/api/savedgifts', async (req, res) => {
    try {
      const savedGift = await SavedGift.findAll();
  
      res.json(savedGift);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'redo code jamie ' });
    }
  });
  //i defined the get route via the saved data hope i did this right as well 

  module.exports = router;
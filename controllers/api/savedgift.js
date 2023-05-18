const express = require('express');
const router = express.Router();
const { SavedGift } = require('../../models');
const withAuth = require('../../util/auth')
//added dependencies for the new file to correspond wiht the savedgifts.js in the models folder hope im doing this right 

router.get('/', async (req, res) => {

    try {
      const savedGift = await SavedGift.findAll();
  
      res.json(savedGift);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'redo code jamie ' });
    }
  });
  //i defined the get route via the saved data hope i did this right as well 

  //post savedgift
router.post('/', withAuth, async (req, res) => {
  try {
    const { first_name:firstName, last_name:lastName, relationship:relationship, gender: gender, productURL: productURL, event_id:eventId, gift_id: giftId } = req.body;
    const savedGiftData = await SavedGift.create({
      first_name: firstName,
      last_name: lastName,
      relationship: relationship,
      gender: gender,
      productURL: productURL,
      event_id:eventId,
      gift_id: giftId,
    });
    res.render('gift', savedGiftData);
  } catch (err) {
    res.status(400).json(err);
  }
});

  module.exports = router;
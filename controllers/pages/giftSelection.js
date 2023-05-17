const router = require('express').Router();
const { Gift } = require("../../models");

router.get('/', async (req, res) => {
    const giftData = await Gift.findAll({});

    //because this is an array....need .mpa
    const actualGiftData = giftData.map((gift) => gift.get({ plain: true }));

    const oneGift = actualGiftData[1];
   
    res.render('giftSelection', oneGift);
  });

  module.exports = router;

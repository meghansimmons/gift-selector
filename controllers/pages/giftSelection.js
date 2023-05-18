const router = require('express').Router();
const { Gift } = require("../../models");

router.get('/', async (req, res) => {
    const giftData = await Gift.findAll({});

    //because this is an array....need .mpa
    const actualGiftData = giftData.map((gift) => gift.get({ plain: true }));

    res.render('giftSelection', {actualGiftData});
  });

  module.exports = router;

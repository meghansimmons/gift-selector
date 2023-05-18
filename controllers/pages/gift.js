const router = require('express').Router();
const { savedGift } = require("../../models");

router.get('/', async (req, res) => {
    const savedgiftData = await savedGift.findAll({});

    //because this is an array....need .mpa
    const actualsavedgiftData = savedgiftData.map((savedgift) => savedgift.get({ plain: true }));

    res.render('gift', {actualsavedgiftData});
  });

  module.exports = router;

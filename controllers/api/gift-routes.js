const router = require('express').Router();
const { Gift } = require('../../models');

//localhost:3001/api/gifts
// find all gifts
router.get('/', async (req, res) => {
  try {
    const giftData = await Gift.findAll({
    });
    res.status(200).json(giftData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//post new gifts
router.post('/', async (req, res) => {
  try {
    const { item:giftItem, price:giftPrice, gift_category:giftCategory } = req.body;
    const giftData = await Gift.create({
      item: giftItem,
      price: giftPrice,
      gift_category: giftCategory,
    });
    res.status(200).json(giftData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

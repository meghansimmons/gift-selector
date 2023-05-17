const router = require('express').Router();
const { Event } = require('../../models');

// localhost:3001/api/event
// router.get('/', async (req, res) => {
//     try {
//         const eventData = await Event.findAll({
//         });
//         res.status(200).json(eventData);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     });

router.get('/', async (req, res) => {
    try {
      const eventData = await Event.findOne({
        where: {
          holiday_name: req.body.holiday,
        },
      });
      res.status(200).json(eventData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
//post new event
router.post('/', async (req, res) => {
    try {
      const { date:eventDate, holiday_name:holiday } = req.body;
      const eventData = await Event.create({
        date:eventDate,
        holiday_name:holiday
      });
      res.status(200).json(eventData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  


module.exports = router;
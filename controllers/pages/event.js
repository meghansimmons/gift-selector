const router = require('express').Router();
const { Event } = require("../../models");

router.get('/', async (req, res) => {
      const eventData = await Event.findAll({
        attributes: [
          'holiday_name'
        ]
      });
      console.log(userData)
    const userEventData = eventData.map((event) => event.get({ plain: true }));
    console.log("holidays", userEventData)
    res.render('event', {eventData});
       
  });


  module.exports = router;

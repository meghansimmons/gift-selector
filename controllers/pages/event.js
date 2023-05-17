const router = require('express').Router();
const { Event } = require("../../models");

router.get('/', async(req, res) => {
    const eventData = await Event.findAll({ 
        where: { 
            holiday_name : req.body.holiday_name } });
   
    res.render('event', eventData);
       
  });


  module.exports = router;

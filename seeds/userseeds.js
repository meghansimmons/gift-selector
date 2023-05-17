const { Event } = require('../models');

const eventData = [
  {
    date: '2/14/23',
    holiday_name: "Valentine's Day",
  },
  {
    date: '03/2/2023',
    holiday_name: "Birthday",
  },
  {
    date: '8/31/2023',
    holiday_name: "Anniversary",
  },
  {
    date: '05/14/23',
    holiday_name: "Mother's Day",
  },
  {
    date: '06/18/23',
    holiday_name: "Father's Day",
  },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;
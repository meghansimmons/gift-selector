const { User } = require('../models');

const eventData = [
  {
    username: 'dude',
    email: "dude@gmail.com",
    password: "123456JKLR"
  },
  {
    username: 'tattoo',
    email: "tattoo@gmail.com",
    password: "root1234!&"
  },
  {
    username: 'lady',
    email: "lady@gmail.com",
    password: "12345!@#$%"
  },
  {
    username: 'cat',
    email: "cat@gmail.com",
    password: "12345!@#$%"
  },
  {
    username: 'dog',
    email: "dog@gmail.com",
    password: "12345!@#$%"
  },
];

const seedUser = () => User.bulkCreate(eventData);

module.exports = seedUser;
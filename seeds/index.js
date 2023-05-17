const sequelize = require('../config/connection');
const gifts = require('./giftsData');
const seedEvents = require('./event-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await gifts();
  await seedEvents();

  process.exit(0);
};

seedAll();
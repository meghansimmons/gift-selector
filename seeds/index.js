const sequelize = require('../config/connection');
const gifts = require('./giftsData');
const seedEvents = require('./event-seeds');
const seedUser = require('./userseeds');
const seedSavedGift = require('./savedGiftSeeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await gifts();
  await seedEvents();
  await seedUser();
  await seedSavedGift();

  process.exit(0);
};

seedAll();
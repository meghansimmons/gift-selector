const sequelize = require('../config/connection');
const gifts = require('./giftsData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await gifts.giftSeeds();

  process.exit(0);
};

seedAll();
const sequelize = require('../config/connection');
const gifts = require('./gifts');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGifts();

  process.exit(0);
};

seedAll();

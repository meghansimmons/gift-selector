const { Gift } = require('../models');

const giftSeeds = async () => {
  try {
    const giftsData = [
      {
        name: 'Rose Bouquet',
        description: 'A beautiful bouquet of roses or any other flower, the only limit on this gift is your imagination',
        price: 40.00,
        gift_category: 'couples',
      },
      {
        name: 'Diamond Necklace',
        description: 'A brilliant necklace; they are a girl\'s best friend',
        price: 350.00,
        gift_category: 'spouse',
      },
      {
        name: 'Teddy Bear',
        description: 'A cute teddy bear to cuddle with',
        price: 20.00,
        gift_category: 'kids',
      },
      {
        name: 'Birthday Card',
        description: 'A birthday card; simple is typically better, but still write something sentimental',
        price: 2.99,
        gift_category: 'all',
      },
      {
        name: 'Gift Card',
        description: 'Free money used for any and every occasion',
        price: 50.00,
        gift_category: 'friend',
      },
      {
        name: 'Watch',
        description: 'A watch for fashion or to tell time;',
        price: 175.00,
        gift_category: 'friend',
      },
    ];

    await Gift.bulkCreate(giftsData);

    console.log('Gift are here yayyy!!!!.');
  } catch (error) {
    console.error('Error seeding gifts:', error);
  }
};

module.exports = giftSeeds;
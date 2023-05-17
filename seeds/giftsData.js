const { Gift } = require('../models');

const giftSeeds = async () => {
  try {
    const giftsData = [
      {
        item: 'Rose Bouquet',
        productURL: '',
        price: 40.00,
        gift_category: 'couples',
        gender: '',
        // age_min: '',
        // age_max: '',  
        relationship_type: '',
      },
      {
        item: 'Diamond Necklace',
        productURL: '',
        price: 350.00,
        gift_category: 'spouse',
        gender: '',
        // age_min: '',
        // age_max: '',
        relationship_type: '',
      },
      {
        item: 'Teddy Bear',
        productURL: '',
        price: 20.00,
        gift_category: 'kids',
        gender: '',
        // age_min: '',
        // age_max: '',
        relationship_type: '',
      },
      {
        item: 'Birthday Card',
        productURL: '',
        price: 2.99,
        gift_category: 'all',
        gender: '',
        // age_min: '',
        // age_max: '',
        relationship_type: '',
      },
      {
        item: 'Gift Card',
        productURL: '',
        price: 50.00,
        gift_category: 'friend',
        gender: '',
        // age_min: '',
        // age_max: '',
        relationship_type: '',
      },
      {
        item: 'Watch',
        productURL: '',
        price: 175.00,
        gift_category: 'friend',
        gender: '',
        // age_min: '',
        // age_max: '',
        relationship_type: '',
      },
    ];

    await Gift.bulkCreate(giftsData);

    console.log('Gift are here yayyy!!!!.');
  } catch (error) {
    console.error('Error seeding gifts:', error);
  }
};

module.exports = giftSeeds;
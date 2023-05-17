const { Gift } = require('../models');

const giftSeeds = async () => {
  try {
    const giftsData = [
      {
        item: 'Rose Bouquet',
        productURL: 'https://globalrose.com/flowers/solidred-qty.html',
        price: 40.00,
        gift_category: 'flowers',
        gender: 'Female',
        age_min: 13,
        age_max: 99,  
        relationship_type: 'girlfriend',
      },
      {
        item: 'Diamond Necklace',
        productURL: 'https://www.brilliantearth.com/Melrose-Diamond-Necklace-(5-ct.-tw.)-White-Gold-BE4DGTN50',
        price: 350.00,
        gift_category: 'jewelry',
        gender: 'Female',
        age_min: 18,
        age_max: 99,
        relationship_type: 'wife',
      },
      {
        item: 'Teddy Bear',
        productURL: 'https://www.target.com/p/brady-bear-xl-buttercup/-/A-76158420',
        price: 20.00,
        gift_category: 'toys',
        gender: 'Female',
        age_min: 0,
        age_max: 13,
        relationship_type: 'child',
      },
      {
        item: 'Birthday Card',
        productURL: 'https://www.hallmark.com/cards/greeting-cards/no-such-thing-as-too-much-happy-cupcake-birthday-card-599LAD9447.html',
        price: 2.99,
        gift_category: 'card',
        gender: 'Male',
        age_min: 0,
        age_max: 105,
        relationship_type: 'coworker',
      },
      {
        item: 'Gift Card',
        productURL: 'https://www.target.com/p/starbucks-gift-card-15-email-delivery/-/A-52804128',
        price: 50.00,
        gift_category: 'money',
        gender: 'Female',
        age_min: 10,
        age_max: 99,
        relationship_type: 'friend',
      },
      {
        item: 'Watch',
        productURL: 'https://www.samsung.com/us/watches/galaxy-watch5',
        price: 175.00,
        gift_category: 'jewelry',
        gender: 'Male',
        age_min: 18,
        age_max: 99,
        relationship_type: 'husband',
      },
    ];

    await Gift.bulkCreate(giftsData);

    console.log('Gift are here yayyy!!!!.');
  } catch (error) {
    console.error('Error seeding gifts:', error);
  }
};

module.exports = giftSeeds;

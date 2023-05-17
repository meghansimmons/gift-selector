const { Gift } = require('../models');

const giftSeeds = async () => {
  try {
    const giftsData = [
      {
        item: 'Rose Bouquet',
        productURL: 'https://www.1800flowers.com/twodozenredroses-100185',
        productImage: 'https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/90926mrdv4x.jpg',
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
        productImage: 'https://image.brilliantearth.com/media/product_images/50/BE4DGTN50-18KW.jpg',
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
        productImage: 'https://target.scene7.com/is/image/Target/GUEST_a6fdb107-33d6-4ce2-8f67-28698cc3285a?wid=325&hei=325&qlt=80&fmt=pjpeg',
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
        productImage: 'https://www.hallmark.com/dw/image/v2/AALB_PRD/on/demandware.static/-/Sites-hallmark-master/default/dw71239bd7/images/finished-goods/products/599LAD9447/Cupcake-With-Sparkler-Candle-Birthday-Card_599LAD9447_01.jpg',
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
        productImage: 'https://target.scene7.com/is/image/Target/GUEST_0036a77a-6f5f-45f6-8a39-f0bffd7df99d?wid=325&hei=325&qlt=80&fmt=pjpeg',
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
        productImage: 'https://image-us.samsung.com/us/watches/galaxy-watch5/images/galaxy-watch5-kv.jpg',
        price: 175.00,
        gift_category: 'jewelry',
        gender: 'Male',
        age_min: 18,
        age_max: 99,
        relationship_type: 'husband',
      },
    ];

    await Gift.bulkCreate(giftsData);

    
  } catch (error) {
    console.error('Error seeding gifts:', error);
  }
};

module.exports = giftSeeds;

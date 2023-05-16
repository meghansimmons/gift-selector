// i need a const something maybe models will check later 
const { gifts } = require('../models');

const gifts = [
    {
      name: 'Rose Bouquet',
      description: 'A beautiful bouquet of roses or any other flower, the only limit on this gift is your imagination ',
      price: 40.00,
      category: 'couples, mom',

    },
    {
      name: 'Diamond Necklace',
      description: 'a brilliant necklace they are a girls best friend ',
      price: 350.00,
      category: 'spouse',
      
    },
    {
      name: 'Teddy Bear',
      description: 'A cute teddy bear to cuddle with',
      price: 20.00,
      category: 'kids, couples',
      
    },
    {
      name: 'Birthday Card',
      description: 'a birthday card simple typically better with money in it but still write something sentimental',
      price: 2.99,
      category: 'all',
      
    },
    {
      name: 'Gift Card',
      description: 'free money used for any and every occasion',
      price: 50.00,
      category: 'friend, co-worker',
      
    },
    {
      name: 'watch',
      description: 'a watch for fashion or to tell time either way you cant go wrong with a watch',
      price: 175.00,
      category: 'friend, co-worker, dad'

    },
  ];
  //let me know if my category was good or if i need to add anything 
  module.exports = seedGifts;
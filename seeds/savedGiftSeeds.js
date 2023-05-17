const { SavedGift } = require('../models');

const eventData = [
  {
    first_name: 'Darrel',
    last_name: "James",
    relationship: "Boyfriend",
    gender: 'M',
    age: 45,
    productURL: 'https://www.target.com/p/starbucks-gift-card-15-email-delivery/-/A-52804128',
    event_id: 1,
    user_id: 2,
    gift_id: 5,
    
  },
  {
    first_name: 'Hannah',
    last_name: "Banana",
    relationship: "Girlfriend",
    gender: 'F',
    age: 22,
    productURL: 'https://globalrose.com/flowers/solidred-qty.html',
    event_id: 2,
    user_id: 3,
    gift_id: 1,
  },
  {
    first_name: 'Jim',
    last_name: "Slim",
    relationship: "Boyfriend",
    gender: 'M',
    age: 19,
    productURL: 'https://www.samsung.com/us/watches/galaxy-watch5',
    event_id: 3,
    user_id: 4,
    gift_id: 6,
  },
  {
    first_name: 'Juanita',
    last_name: "Fernandez",
    relationship: "Wife",
    gender: 'f',
    age: 32,
    productURL: 'https://www.brilliantearth.com/Melrose-Diamond-Necklace-(5-ct.-tw.)-White-Gold-BE4DGTN50',
    event_id: 4,
    user_id: 3,
    gift_id: 2,
  },
  {
    first_name: 'Samson',
    last_name: "Samsonsamsonsamson",
    relationship: "son",
    gender: 'm',
    age: 12,
    productURL: 'https://www.target.com/p/brady-bear-xl-buttercup/-/A-76158420',
    event_id: 4,
    user_id: 2,
    gift_id: 3,
  },
];

const seedSavedGift = () => SavedGift.bulkCreate(eventData);

module.exports = seedSavedGift;
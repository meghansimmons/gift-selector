const User = require('./Users');
const Event = require('./Event')
const Gift = require('./Gift');
const savedGift = require('./savedGift');

User.hasMany(savedGift, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

savedGift.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
});


Gift.belongsToMany(Event, {
    through: 'event_gift'
});

Event.belongsToMany(Gift, {
    through: 'event_gift'
});

Gift.belongsToMany(savedGift, {
    through: 'saved_gift'
})

savedGift.belongsToMany(Gift, {
    through: 'saved_gift'
})

Event.belongsToMany(savedGift, {
    through: 'event_saved'
});

savedGift.belongsToMany(Event, {
    through: 'event_saved'
});

module.exports = { User, Event, Gift, savedGift };

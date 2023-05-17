const User = require('./Users');
const Event = require('./Event')
const Gift = require('./Gift');
const SavedGift = require('./savedGift');

User.hasMany(SavedGift, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

SavedGift.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
});


Gift.belongsToMany(Event, {
    through: 'event_gift'
});

Event.belongsToMany(Gift, {
    through: 'event_gift'
});

Gift.belongsToMany(SavedGift, {
    through: 'saved_gift'
})

SavedGift.belongsToMany(Gift, {
    through: 'saved_gift'
})

Event.belongsToMany(SavedGift, {
    through: 'event_saved'
});

SavedGift.belongsToMany(Event, {
    through: 'event_saved'
});

module.exports = { User, Event, Gift, SavedGift };

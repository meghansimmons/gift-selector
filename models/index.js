const sequelize = require('./config/connection');
const User = require('./models/User');

User.init(sequelize);


sequelize.sync({ force: false }).then(() => {
 
});
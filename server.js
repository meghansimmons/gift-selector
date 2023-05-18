const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { Gift } = require('./models');
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create();
const sess = {
  secret: 'secrettttts',
  cookie: {
    maxAge: 60 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
app.use(routes);
app.get('/gift', async (req, res) => {
  try {
    const giftsData = await Gift.findAll();
    const gifts = giftsData.map((gift) => gift.get({ plain: true }));
    console.log(gifts);
    res.render('gift', { gifts });
  } catch (err) {
    console.error('Error retrieving gift items:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');

require('dotenv').config();
require('./passport');

//import routes
const routes = require('./routes/api');
const authRoutes = require('./routes/auth');
const { db } = require('./models/User');

const app = express();

const port = process.env.PORT || 5000;

// Google OAuth2.0 using passport.js
app.use(cookieSession({
  name: 'google-auth-session',
  keys: ['key1', 'key2']
}));
app.use(passport.initialize());
app.use(passport.session());
  

app.get('/', (req, res) => {
  res.send("<button><a href='/auth'>Login With Google</a></button>")
});

// Auth 
app.get('/auth' , passport.authenticate('google', { scope:
  [ 'email', 'profile' ]
}));

// Auth Callback
app.get( '/auth/callback',
  passport.authenticate( 'google', {
      successRedirect: '/auth/callback/success',
      failureRedirect: '/auth/callback/failure'
}));

// Success 
app.get('/auth/callback/success' , (req , res) => {
  if(!req.user)
      res.redirect('/auth/callback/failure');
  res.send("Welcome " + req.user.email);
});

// failure
app.get('/auth/callback/failure' , (req , res) => {
  res.send("Error");
})

// Connect to the database
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}));

app.use('/api', routes);
app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
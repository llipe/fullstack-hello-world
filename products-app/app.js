// app.js
// .env shouldn't be used in production environments
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
  }

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// Import routes
const product = require('./routes/product.route');

// Set up mongoose connection
let dev_db_url = 'mongodb://localhost:27017/productdb';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Initialize express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = process.env.HTTP_PORT || 3000;
app.listen(port, () => {
    console.log('Server running on port ' + port);
});
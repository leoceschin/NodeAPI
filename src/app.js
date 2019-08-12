'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

mongoose.connect('mongodb://leo:l123456@ds161517.mlab.com:61517/nodeapi', {useNewUrlParser: true});
const Product = require('./models/product');


//Carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;
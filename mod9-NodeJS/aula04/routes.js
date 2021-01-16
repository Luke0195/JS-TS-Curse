const express = require('express');
const  homeController = require('./controllers/homeController')
const routes = express();


routes.get('/', homeController.exec);
module.exports = routes;
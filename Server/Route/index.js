const express = require('express');

const locationController = require("../Controller/location");
const restaurantController = require("../Controller/restaurant");
const mealtypeController = require("../Controller/mealtype");
const menuController = require("../Controller/menu");

const route = express.Router();

route.get('/location', locationController.getlocation);                      // Homepage - Get Location API;
route.get('/restaurant/:locId', restaurantController.getRestaurantByLocationId);  // Homepage - Get Restaurant By Location API
route.get('/restaurant/:id', restaurantController.getRestaurantById);      // Details - Get Restaurant By ID API
route.get('/mealtype', mealtypeController.getMealtype);                     // Homepage - Get Mealtype API
route.get('/menu',menuController.getMenuByRestaurantId);


// FILTER
route.get('/restaurant', restaurantController.getRestaurant);               // List of Restaurants API
route.post('/filter', restaurantController.filteredRestaurant);


module.exports = route;
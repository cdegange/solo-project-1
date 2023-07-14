const fs = require('fs');
const path = require('path');
const axios = require('axios');

const controller = {};

controller.getMetar = async (req, res, next) => {
  const airportIdentifier = req.body.string;
  console.log('airport', airportIdentifier);
  //console log the request body 
  try {
    const response = await axios.get(`https://api.checkwx.com/metar/${airportIdentifier}?x-api-key=93d4c43c20254a0e9cdfdab6fa`
      ); 
      console.log('response', response);
      res.locals.metar = await response.data.data[0];
      console.log('metar', res.locals.metar)
      next();
    } catch (err) {
      next({
        log: `Error occurred in getMetar controller: ${err}`,
        message: 'Unable to process request at this time',
      });
    }
  };
  
  module.exports = controller;

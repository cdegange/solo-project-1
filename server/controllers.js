const fs = require('fs');
const path = require('path');

const controller = {};

controller.getMetar = async (req, res, next) => {
  const { inputValue } = req.body;
  //console log the request body 
  try {
    const response = await fetch(`https://api.checkwx.com/metar/KMYF?x-api-key=93d4c43c20254a0e9cdfdab6fa`
      ); 
      const data = await response.json();
      // console.log('This is the awaited data', data);
      res.locals.metar = data;
      next();
    } catch (err) {
      next({
        log: `Error occurred in getMetar controller: ${err}`,
        message: 'Unable to process request at this time',
      });
    }
  };
  
  module.exports = controller;
  // `https://www.ncei.noaa.gov/cdo-web/api/v2/locationcategories/${ inputValue }_limit=5`
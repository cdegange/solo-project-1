const fs = require('fs');
const path = require('path');

const controller = {};

controller.getMetar = async (req, res, next) => {
  try {
    const response = await fetch(
      'https://www.ncei.noaa.gov/cdo-web/api/v2/locationcategories/{inputValue}_limit=5'
    );
    const data = await response.json();
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
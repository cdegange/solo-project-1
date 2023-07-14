const express = require('express');
const app = express();
const path = require('path');
const controller = require('./controllers');

const PORT = 5501;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serves static pages to the /build path

app.use(express.static(path.join(__dirname, '../')));

app.use('/noaa', controller.getMetar, (req,res) => {
  res.status(200).setHeader('Content-Type', 'application/json').json(res.locals.metar);
})

// app.post('/redirect', (req, res) => {
//   console.log(req.body);
//   res.redirect('/noaa');
// })

// global error handler

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: {err: 'An error occured'},
  }
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
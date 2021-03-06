// npm modules
const express = require('express'),
      configFile  = require('config');
// local modules
const error   = require('./error');

var app = express();
app.locals = {
  title : configFile.server.title,
  port  : configFile.server.port
};

app
  .all('/', (req, res) => {
    console.log(req.originalUrl);
    res.send("aaa");
  })
  .all('/error', (req, res) => {
    res.end(hoge);
  });

app
  .use((req, res, next) => {
    error.errorHandler(res, 404);
  })
  .use((err, req, res, next) => {
    error.errorHandler(res, 500);
  });

app.listen(app.locals.port, () => {
  console.log(`${app.locals.title} listening on port ${app.locals.port}!`);
});

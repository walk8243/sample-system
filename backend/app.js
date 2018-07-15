// npm modules
const express = require('express');
// local modules
const error   = require('./error');

var app = express();
app.locals = {
  title : 'My App',
  port  : 1234
}

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
    // res.sendStatus(404);
    error.errorHandler(res, 404);
  })
  .use((err, req, res, next) => {
    // res.sendStatus(500);
    error.errorHandler(res, 500);
  });

app.listen(app.locals.port, () => {
  console.log(`${app.locals.title} listening on port ${app.locals.port}!`);
});

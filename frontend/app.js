// npm modules
const express = require('express');
fs      = require('fs');
// local modules
func    = require('./func');
const error   = require('./error');

app = express();
app.locals = {
  title : 'Frontend App',
  port  : 3000
};
app.set('view engine', 'ejs');

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

const express = require('express');

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
    console.log(req.originalUrl);
    // console.log(req.query.status);
    res.sendStatus(req.query.status);
    // res.end("sss");
  });

app.listen(app.locals.port, () => {
  console.log(`${app.locals.title} listening on port ${app.locals.port}!`);
});

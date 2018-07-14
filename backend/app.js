const express = require('express');

var app = express();

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

app.listen(1234);

// npm modules
const express = require('express');

var app = express();

app
  .all('/', (req, res) => {
    console.log(req.originalUrl);
    res.send("aaa");
  });

app.listen(3000, () => {
  console.log(`Example app listening on port 3000!`);
});

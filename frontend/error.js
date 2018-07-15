module.exports = {
  errorHandler: (res, statusCode) => {
    if(func.isExistFile(`${app.get('views')}/error/${statusCode}.ejs`)) {
      res.status(statusCode);
      res.render(`error/${statusCode}`, {
        app : app.locals
      });
    } else {
      res.sendStatus(statusCode);
    }
  }
};

module.exports = {
  errorHandler: (res, statusCode) => {
    res.sendStatus(statusCode);
  }
};

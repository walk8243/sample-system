module.exports = {
  errorHandler: (res, statusCode) => {
    res.status(statusCode);
    res.send(statusCode + '番Error');
  }
};

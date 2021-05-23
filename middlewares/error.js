const errorHandling = (req, res, next) => {
  console.log('error', err);
  return res.status(500).json({
    message: err.message || 'Oops! Unknown error',
  });
};

module.exports = errorHandling;

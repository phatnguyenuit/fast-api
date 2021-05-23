const authentication = (req, res, next) => {
  if (req.headers.authorization === 'fast-nguyen') {
    next();
  } else {
    res.status(403);
    res.json({
      message: 'Authorization is required.',
    });
  }
};

module.exports = authentication;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  return res.json({
    message: '200 OK',
    data: [{
      name: 'User',
      email: "user_email@example.com"
    }]
  });
});

module.exports = router;

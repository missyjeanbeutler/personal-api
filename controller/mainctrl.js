const user = require('../user.js');

module.exports = {
  getName: function(req, res, next) {
    res.status(200).send({name: user.name})
  }
}
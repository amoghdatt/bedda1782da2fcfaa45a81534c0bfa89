const randomstring = require('randomstring');

function UniqueIdService() {
  this.generateBasedOnLength = length => randomstring.generate(length);
}

module.exports = UniqueIdService;

const moment = require('moment');

function TimeService() {
  this.now = function () {
    return moment().toDate();
  };

  this.timestamp = function () {
    return moment().unix();
  };

  this.nowAsISOString = function () {
    return moment().toISOString();
  };
}

module.exports = TimeService;

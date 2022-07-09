const { v4: uuidV4 } = require('uuid');

module.exports = function UUIDService() {
  this.generateUUID = () => {
    return uuidV4();
  };
};

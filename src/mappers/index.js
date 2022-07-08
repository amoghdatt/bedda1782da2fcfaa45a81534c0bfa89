const UserMapper = require('./user-mappers');

function Mappers() {
  const userMapper = UserMapper();

  return { userMapper };
}

module.exports = Mappers;

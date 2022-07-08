const objectMapper = require('object-mapper');

function UserMapper() {
  const dbToProjectMapper = {
    guid: 'userId',
    email: 'email',
    password: 'password',
    phoneContact: 'phoneContact'
  };

  const projectToDbMapper = {
    userId: 'guid',
    email: 'email',
    password: 'password',
    phoneContact: 'phoneContact'
  };

  const dbToProject = user => objectMapper(user, dbToProjectMapper);
  const projectToDb = user => objectMapper(user, projectToDbMapper);

  return { dbToProject, projectToDb };
}

module.exports = UserMapper;

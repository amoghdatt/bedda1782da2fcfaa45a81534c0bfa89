const { TABLE_USER } = require('../constants/table-constants');

function UserRepository({ mappers, knex }) {
  const self = this;
  const { userMapper } = mappers;

  this.findById = async (userId, transaction = knex) => {
    const result = await transaction(TABLE_USER)
      .select(['guid', 'email', 'password', 'phoneContact'])
      .where({ guid: userId });

    return userMapper.dbToProject(result);
  };

  this.findByEmail = async (email, transaction = knex) => {
    const result = await transaction(TABLE_USER)
      .select(['guid', 'email', 'password'])
      .where({ email });

    return result;
  };

  this.update = async (userId, user, transaction = knex) => {
    const result = await transaction(TABLE_USER)
      .update(user)
      .where({ guid: userId })
      .returning(['guid']);

    return result;
  };

  this.create = async (user, transaction = knex) => {
    const createdUser = await transaction(TABLE_USER).insert(user).returning(['guid']);

    return createdUser[0];
  };

  this.createOrUpdate = async (user, transaction = knex) => {
    const matchingUser = await self.findById(user.guid, transaction);

    return matchingUser
      ? self.update(user.guid, user, transaction)
      : self.create(user, transaction);
  };
}

module.exports = UserRepository;

const { TABLE_FILE } = require('../constants/table-constants');

function FileRepository({ knex }) {
  const self = this;

  this.findById = async (fileId, transaction = knex) => {
    const result = await transaction(TABLE_FILE)
      .select(['guid', 'userId', 'filename', 'fileType', 'location'])
      .where({ guid: fileId });

    return result;
  };

  this.findAllByUserId = async (userId, transaction = knex) => {
    const result = await transaction(TABLE_FILE)
      .select(['guid', 'userId', 'filename', 'fileType', 'description'])
      .where({ userId });

    return result;
  };

  this.update = async (fileId, file, transaction = knex) => {
    const result = await transaction(TABLE_FILE)
      .update(file)
      .where({ guid: fileId })
      .returning(['guid']);

    return result;
  };

  this.create = async (file, transaction = knex) => {
    const createdfile = await transaction(TABLE_FILE).insert(file).returning(['guid']);

    return createdfile[0];
  };

  this.createOrUpdate = async (file, transaction = knex) => {
    const matchingfile = await self.findById(file.guid, transaction);

    return matchingfile.length
      ? self.update(file.guid, file, transaction)
      : self.create(file, transaction);
  };

  this.deleteFile = async (fileId, transaction = knex) => {
    const result = await transaction(TABLE_FILE)
      .where({ guid: fileId })
      .returning(['guid', 'location'])
      .del();
    return result;
  };
}

module.exports = FileRepository;

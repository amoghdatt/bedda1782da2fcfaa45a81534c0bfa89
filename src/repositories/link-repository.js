const { TABLE_LINK } = require('../constants/table-constants');

function LinkRepository({ knex }) {
  const self = this;

  this.findById = async (linkId, transaction = knex) => {
    const result = await transaction(TABLE_LINK)
      .select(['guid', 'fileId', 'linkId'])
      .where({ guid: linkId });

    return result;
  };

  this.findByLinkId = async (linkId, transaction = knex) => {
    const result = await transaction(TABLE_LINK)
      .select(['guid', 'fileId', 'linkId'])
      .where({ linkId });

    return result;
  };

  this.update = async (linkId, link, transaction = knex) => {
    const result = await transaction(TABLE_LINK)
      .update(link)
      .where({ guid: linkId })
      .returning(['guid']);

    return result;
  };

  this.create = async (link, transaction = knex) => {
    const createdlink = await transaction(TABLE_LINK).insert(link).returning(['guid', 'linkId']);

    return createdlink[0];
  };

  this.createOrUpdate = async (link, transaction = knex) => {
    const matchinglink = await self.findById(link.guid, transaction);

    return matchinglink.length
      ? self.update(link.guid, link, transaction)
      : self.create(link, transaction);
  };
}

module.exports = LinkRepository;

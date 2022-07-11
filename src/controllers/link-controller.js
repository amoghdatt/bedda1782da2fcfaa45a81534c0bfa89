module.exports = function LinkController({ knex, repositories, services }) {
  const { linkRepository, fileRepository } = repositories;
  const { FileService } = services;
  const fileService = new FileService({});

  this.download = async function (linkId) {
    const [{ fileId }] = await linkRepository.findByLinkId(linkId, knex);
    const [{ location, filename }] = await fileRepository.findById(fileId, knex);
    const stream = fileService.getStream(location);
    return { stream, filename };
  };
};

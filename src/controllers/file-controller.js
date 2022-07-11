const { length } = require('../constants/download-link-constants');
const { BASE_URL } = require('../constants/project-constants');
const LinkRepository = require('../repositories/link-repository');

module.exports = function FileController({ repositories, knex, services }) {
  const { fileRepository, linkRepository } = repositories;
  const { FileService, uuidService, timeService, uniqueIdService } = services;

  this.uploadFile = async function uploadFile(fileData) {
    const fileService = new FileService(fileData);
    const { filePath } = await fileService.save();

    await fileRepository.create(
      {
        guid: uuidService.generateUUID(),
        userId: fileData.userId,
        filename: fileData.filename,
        fileType: fileData.mimetype,
        description: fileData.description,
        location: filePath
      },
      knex
    );
    return filePath;
  };

  this.deleteFile = async function deleteFile(fileId) {
    const [{ location }] = await fileRepository.deleteFile(fileId, knex);
    const fileService = new FileService({});
    fileService.delete(location);
  };

  this.generateDownloadLink = async function generateDownloadLink({ fileId, userId }) {
    // const [{ guid: fileId }] = await fileRepository.findById(fileId);
    const newDownloadLinkObject = {
      guid: uuidService.generateUUID(),
      userId,
      fileId,
      linkId: uniqueIdService.generateBasedOnLength(length)
    };
    const { linkId } = await linkRepository.create(newDownloadLinkObject);
    return { link: `${BASE_URL}/${linkId}` };
  };
};

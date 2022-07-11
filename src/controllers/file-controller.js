module.exports = function FileController({ repositories, knex, services }) {
  const { fileRepository } = repositories;
  const { FileService, uuidService } = services;

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
    const result = await fileRepository.deleteFile(fileId, knex);
  };
};

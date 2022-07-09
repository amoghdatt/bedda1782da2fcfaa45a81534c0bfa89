module.exports = function FileController({ repositories, knex, services }) {
  const { fileRepository } = repositories;
  const { FileService } = services;

  this.uploadFile = async function uploadFile(fileData) {
    const fileService = new FileService(fileData);
    const { filePath } = await fileService.save();
    return filePath;
  };
};

module.exports = function UserController({ repositories, knex, services }) {
  const { fileRepository } = repositories;

  this.allUserFiles = async function allUserFiles(userId) {
    const result = await fileRepository.findAllByUserId(userId, knex);
    return { files: result };
  };
};

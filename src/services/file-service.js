const fs = require('fs');
const util = require('util');
const path = require('path');
const { pipeline } = require('stream');
const { PROJECT_DIRECTORY } = require('../constants/project-constants');
const pump = util.promisify(pipeline);

module.exports = function FileService(data) {
  const self = this;

  async function generateFileName() {
    return data.filename;
  }

  async function generatePath(filename) {
    const dir = data.userId;
    const filePath = path.format({
      root: PROJECT_DIRECTORY,
      dir
    });

    if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath);
    }

    return path.join(filePath, filename);
  }

  async function saveFile(filePath) {
    await pump(data.file, fs.createWriteStream(filePath));

    return { filePath };
  }

  this.save = async () => {
    return await generateFileName().then(generatePath).then(saveFile);
  };
};

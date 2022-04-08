const path = require('path');
const fs = require('fs');

const { ApiError } = require('../helpers/errorHandler');

const controller = {
  /**
   * Controller to get all path of compressed-videos
   * ExpressMiddleware signature
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  getAll(_, res) {
    // joining path of directory
    const directoryPath = path.join(__dirname, '../public/uploads/compressed-videos/');
    // passsing directoryPath and callback function
    fs.readdir(directoryPath, (err, files) => {
      // handling error
      if (err) {
        throw new ApiError(500, `Unable to scan directory: ${err}`);
      }

      // Removing the .empty file using for git
      const emptyFile = files.indexOf('.empty');
      if (emptyFile !== -1) {
        files.splice(emptyFile, 1);
      }

      const filesWithPath = files.map((file) => directoryPath.concat(file));

      return res.json(filesWithPath);
    });
  },

  /**
   * Controller to delete the path of a compressed video
   * ExpressMiddleware signature
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  deleteFullRes(_, res) {
    // joining path of directory
    const directoryPath = path.join(__dirname, '../public/');
    // passsing directoryPath and callback function
    fs.readdir(directoryPath, (err, files) => {
      // handling error
      if (err) {
        throw new ApiError(500, `Unable to scan directory: ${err}`);
      }

      // Removing the .empty file using for git
      const uploadsFolder = files.indexOf('uploads');
      if (uploadsFolder !== -1) {
        files.splice(uploadsFolder, 1);
      }
      fs.unlink(directoryPath + files[0], (error) => {
        if (error) {
          console.error(error);
        }
      });

      return res.json(files);
    });
  },
};

module.exports = { controller };

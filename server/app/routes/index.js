const express = require('express');
const path = require('path');
const multer = require('multer');

const { controller } = require('../controllers/filesController');
const controllerHandler = require('../helpers/controllerHandler');
const { ApiError } = require('../helpers/errorHandler');

const router = express.Router();

const { uploadVideo } = require('../helpers/uploadVideos');

// Multer configuration
const videoStorage = multer.diskStorage({
  destination(_, __, cb) {
    cb(null, `${__dirname}/../public`);
  },
  filename(_, file, cb) {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const videoUpload = multer({
  storage: videoStorage,
  limits: {
    fileSize: 500000000, // 10000000 Bytes = 500 MB
  },
  fileFilter(_, file, cb) {
    // upload only mp4, mov and mkv format
    if (!file.originalname.match(/\.(mp4|MPEG-4|mov|mkv)$/)) {
      return cb(new Error('Please upload a video'));
    }
    return cb(undefined, true);
  },
});

router
  .route('/upload')
  /**
   * POST /upload
   * @summary Upload route to upload a file and create a low-res version of it
   * @tags UPLOAD
   */
  .post(videoUpload.single('video'), controllerHandler(uploadVideo), controllerHandler(controller.deleteFullRes));

router
  .route('/files')
  /**
   * GET /files
   * @summary Files route to see all low-res files
   * @tags FILES
   */
  .get(controllerHandler(controller.getAll));

router.use(() => {
  throw new ApiError(404, '404 NOT FOUND');
});

module.exports = router;

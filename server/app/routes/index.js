const express = require('express');
const path = require('path');
const multer = require('multer');

const { controller } = require('../controllers');
const controllerHandler = require('../helpers/controllerHandler');
const { ApiError } = require('../helpers/errorHandler');

const router = express.Router();

// !
router
  .route('/')
  /**
   * GET /
   * @summary Test API connection
   * @tags TEST
   */
  .get((_, res) => { res.send('API is working'); });
// !

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
    // upload only mp4 and mkv format
    if (!file.originalname.match(/\.(mp4|mov|MPEG-4|mkv)$/)) {
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
  .post(videoUpload.single('video'), (req, res) => res.send(req.file));

router.use(() => {
  throw new ApiError(404, '404 NOT FOUND');
});

module.exports = router;

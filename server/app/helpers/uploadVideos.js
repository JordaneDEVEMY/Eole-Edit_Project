const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const debug = require('debug')('uploadVideos:logs');

const { ApiError } = require('./errorHandler');

ffmpeg.setFfmpegPath(ffmpegPath);

const uploadVideo = (req, res, next) => {
  const lowRes = process.env.LOW_RES;

  const outputPath = `${__dirname}/../public/uploads/compressed-videos/`;

  ffmpeg()
    .input(req.file.path)
    .videoCodec('libx264')

    .output(outputPath + req.file.filename)
    .size(`${lowRes}x?`)

    .on('start', () => {
      debug('Videos converting in progress...');
    })
    .on('end', () => {
      debug('Videos converted');
      next();
    })
    .on('error', (err) => {
      throw new ApiError(err);
    })

    .exec();
};

module.exports = {
  uploadVideo,
};

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const { ApiError } = require('./errorHandler');

ffmpeg.setFfmpegPath(ffmpegPath);

const uploadVideo = (req, res) => {
  const outputPathSmall = `${__dirname}/../public/uploads/480/`;
  const outputPathMed = `${__dirname}/../public/uploads/768/`;
  const outputPathLar = `${__dirname}/../public/uploads/1080/`;

  ffmpeg()
    .input(req.file.path)
    .videoCodec('libx264')
    .output(outputPathLar + req.file.filename)
    .size('1080x?')

    .output(outputPathMed + req.file.filename)
    .size('768x?')

    .output(outputPathSmall + req.file.filename)
    .size('320x?')

    .on('start', () => {
      console.log('Videos converting in progress...');
    })
    .on('end', () => {
      console.log('Videos converted');
      res.end();
    })
    .on('error', (err) => {
      throw new ApiError(err);
    })

    .exec(); // .run()
};

module.exports = {
  uploadVideo,
};

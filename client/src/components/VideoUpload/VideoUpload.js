import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ToastMessage from '../ToastMessage/ToastMessage';
import ProgressBar from '../ProgressBar/ProgressBar';

import { BACKEND_URI } from '../../config/constants';

function VideoUpload({ getAllMedias }) {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = (event) => {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);

    setUploadPercentage(0);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('video', file);

    if (!file) {
      setMessage('Video file is required');
      return;
    }

    try {
      await axios
        .post(`${BACKEND_URI}/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent) => {
            setUploadPercentage(
              parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total), 10),
            );
          },
        });

      getAllMedias();

      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 2500);

      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0);
    }
  };

  return (
    <div>
      {message ? <ToastMessage msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className="custom-file mb-4">
          <input
            type="file"
            className="custom-file-input"
            id="video"
            onChange={onChange}
            style={{ cursor: 'pointer' }}
          />
          <label className="custom-file-label" htmlFor="video">
            {filename}
          </label>
          <p className="text-muted">
            <small>
              Supported formats : .mp4, .MPEG-4, .mov, .mkv, .wmv and .flv
            </small>
          </p>
        </div>

        <ProgressBar percentage={uploadPercentage} />

        <input
          type="submit"
          value="Upload"
          className="btn btn-primary btn-block mt-4"
        />
      </form>
    </div>
  );
}

VideoUpload.propTypes = {
  getAllMedias: PropTypes.func.isRequired,
};

VideoUpload.defaultProps = {
};

export default React.memo(VideoUpload);

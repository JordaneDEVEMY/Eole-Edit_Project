import React, { Fragment, useState } from 'react';
import ToastMessage from '../ToastMessage/ToastMessage';
import ProgressBar from '../ProgressBar/ProgressBar';
import axios from 'axios';

import { BACKEND_URI } from "../../config/constants";

const FileUpload = ({ getAllMedias }) => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = event => {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);

    setUploadPercentage(0);
  };

  const onSubmit = async event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('video', file);

    if (!file) {
      setMessage('Video file is required');
      return;
    }
    
    try {
      const res = await axios
      .post(`${BACKEND_URI}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
      })

      getAllMedias();
      
      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 2500);

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0)
    }
  };

  return (
    <Fragment>
      {message ? <ToastMessage msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='video'
            onChange={onChange}
            style={{ cursor: 'pointer' }}
          />
          <label className='custom-file-label' htmlFor='video'>
            {filename}
          </label>
          <p className="text-muted">
            <small>
              Supported formats : .mp4, .MPEG-4, .mov, .mkv, .wmv, .flv, .gif
            </small>
          </p>
        </div>

        <ProgressBar percentage={uploadPercentage} />

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default React.memo(FileUpload);

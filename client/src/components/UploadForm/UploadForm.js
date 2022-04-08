import React, { useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';

import './uploadForm.scss';
import { BACKEND_URI } from "../../config/constants";

const UploadForm = () => {
  const [name, setName] = useState("");
  const [video, setVideo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    for (let key in video) {
      formdata.append("video", video[key]);
    }

    formdata.append("name", name);

    axios
      .post(`${BACKEND_URI}/upload`, formdata)
      .then((success) => {
        alert("Submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error happened !");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="video">Upload Video</label>
          <input
            type="file"
            name="video"
            id="video"
            className="form-control"
            accept=".mp4, .mov, .MPEG-4, .mkv"
            onChange={(e) => {
              setVideo(e.target.files);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </>
  );
};

UploadForm.propTypes = {
};

UploadForm.defaultProps = {
};

export default React.memo(UploadForm);

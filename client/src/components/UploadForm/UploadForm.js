import React, { useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { BACKEND_URI } from "../../config/constants";

// Importing toastify module
import { toast } from 'react-toastify';
toast.configure()

const UploadForm = ({ getAllMedias }) => {
  const [video, setVideo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    for (let key in video) {
      formdata.append("video", video[key]);
    }

    axios
      .post(`${BACKEND_URI}/upload`, formdata)
      .then((success) => {
        getAllMedias();
        toast("Submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        toast("Error happened !");
      });
  };

  return (
  <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label htmlFor="video">Upload your video :</Form.Label>
      <Form.Control
            type="file"
            className="form-control"
            name="video"
            id="video"
            onChange={(e) => setVideo(e.target.files)}
            custom
      />
      <Form.Text className="text-muted">
      Supported formats : .mp4, .MPEG-4, .mov, .mkv, .wmv, .flv
      </Form.Text>
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  );
};

UploadForm.propTypes = {
};

UploadForm.defaultProps = {
};

export default React.memo(UploadForm);

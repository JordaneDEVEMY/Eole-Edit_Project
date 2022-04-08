import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

import AppHeader from '../AppHeader/AppHeader.js';
import UploadForm from '../UploadForm/UploadForm.js';
import UploadsList from '../UploadsList/UploadsList.js';
import UploadsVideosList from '../UploadsVideosList/UploadsVideosList.js';

import { BACKEND_URI } from "../../config/constants";

const App = () => {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    getAllMedias();
  }, []);

  const getAllMedias = () => {
    axios
      .get(`${BACKEND_URI}/files`)
      .then((result) => {
        setMedias(result.data);
      })
      .catch((error) => {
        setMedias([]);
        console.log(error);
        alert("Error happened!");
      });
  };

  return (
    <>
    <AppHeader />

    <div className="column">

      <div className="col-md-6">
        <div
          className="card"
          style={{
            height: "auto",
            width: "800px",
            margin: "40px",
            border: "1px solid black",
          }}
        >
          <div className="card-body">
            <UploadForm getAllMedias={getAllMedias} />
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div
          className="card"
          style={{
            height: "auto",
            width: "800px",
            margin: "40px",
            border: "1px solid black",
          }}
        >
          <div className="card-body">
            <UploadsList medias={medias} />
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div
          className="card"
          style={{
            height: "auto",
            width: "800px",
            margin: "40px",
            border: "1px solid black",
          }}
        >
          <div className="card-body">
            <UploadsVideosList medias={medias} />
          </div>
        </div>
      </div>

    </div>
  </>
  );

}

App.propTypes = {
};

App.defaultProps = {
};

export default React.memo(App);

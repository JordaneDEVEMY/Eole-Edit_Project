import React, { useState, useEffect } from 'react';
import axios from 'axios';

import VideoUpload from '../VideoUpload/VideoUpload';
import UploadsList from '../UploadsList/UploadsList';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

import { BACKEND_URI } from '../../config/constants';

function App() {
  const [medias, setMedias] = useState([]);
  const [videoLink, setVideoLink] = useState('');

  const getAllMedias = () => {
    axios
      .get(`${BACKEND_URI}/files`)
      .then((result) => {
        setMedias(result.data);
      })
      .catch((error) => {
        setMedias([]);
        // eslint-disable-next-line no-console
        console.log(error);
        // eslint-disable-next-line no-alert
        alert('Error happened!');
      });
  };

  useEffect(() => {
    getAllMedias();
  }, []);

  const getVideoPlayerLink = (link) => {
    setVideoLink(link);
  };

  return (
    <>
      <div className="container mt-4">
        <h1 className="display-4 text-center mb-4">
          <i className="fab fa-react" />
          {' '}
          Eole Edit Upload Project
        </h1>
        <h2>
          Upload Videos here :
        </h2>
        <VideoUpload getAllMedias={getAllMedias} />
      </div>

      { medias.length > 0
        ? (
          <div className="container mt-4">
            <h2>
              Videos List :
            </h2>
            <UploadsList medias={medias} getVideoPlayerLink={getVideoPlayerLink} />
          </div>
        )
        : null }

      { videoLink
        ? (
          <div className="container mt-4">
            <h2>
              Video Player :
            </h2>
            <VideoPlayer videoSrc={videoLink} />
          </div>
        )
        : null }

    </>
  );
}
export default App;

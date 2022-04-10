import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

import VideoUpload from '../VideoUpload/VideoUpload';
import UploadsList from '../UploadsList/UploadsList.js';
import VideoPlayer from '../VideoPlayer/VideoPlayer.js';

import { BACKEND_URI } from "../../config/constants";

const App = () => {
  const [medias, setMedias] = useState([]);
  const [videoLink, setVideoLink] = useState('');
  
  useEffect(() => {
    getAllMedias();
  }, []);
  
  const getVideoPlayerLink = (link) => {
    setVideoLink(link)
  };

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
    <div className='container mt-4'>
      <h1 className='display-4 text-center mb-4'>
        <i className='fab fa-react' /> Eole Edit Upload Project
      </h1>
      <h4 className='display-4 mb-4'>
       Upload Videos here :
      </h4>
      <VideoUpload getAllMedias={getAllMedias} />
    </div>

    <div className='container mt-4'>
      <h4 className='display-4 mb-4'>
      Videos List :
      </h4>
      <UploadsList medias={medias} getVideoPlayerLink={getVideoPlayerLink} />
    </div>

    <div className='container mt-4'>
      <h4 className='display-4 mb-4'>
      Videos List :
      </h4>
      <VideoPlayer videoSrc={videoLink} />
    </div>
    </>
  );
} 
export default App;

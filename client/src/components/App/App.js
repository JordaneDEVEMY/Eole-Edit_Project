import React from 'react';
import axios from 'axios';

import VideoUpload from '../VideoUpload/VideoUpload';
import UploadsList from '../UploadsList/UploadsList';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

import { BACKEND_URI } from '../../config/constants';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      medias: [],
      videoLink: '',
    };
  }

  getAllMedias = () => {
    axios
      .get(`${BACKEND_URI}/files`)
      .then((result) => {
        this.setState({
          medias: result.data,
        });
      })
      .catch((error) => {
        this.setState({
          medias: [],
        });
        // eslint-disable-next-line no-console
        console.log(error);
        // eslint-disable-next-line no-alert
        alert('Error happened!');
      });
  };

  getVideoPlayerLink = (link) => {
    this.setState({
      videoLink: link,
    });
  };

  render() {
    const {
      medias, videoLink,
    } = this.state;
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
          <VideoUpload getAllMedias={this.getAllMedias} />
        </div>

        { medias.length > 0
          ? (
            <div className="container mt-4">
              <h2>
                Videos List :
              </h2>
              <UploadsList
                medias={medias}
                getVideoPlayerLink={this.getVideoPlayerLink}
              />
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
}

export default App;

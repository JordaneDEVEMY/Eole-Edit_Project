import React from "react";
import PropTypes from 'prop-types';

import './uploadsVideosList.scss';
import { BACKEND_URI } from "../../config/constants";

const UploadsVideosList = ({ medias }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <ul style={{listStyleType: "none"}}>
        {medias.length > 0
            ? medias.map((video) => {
              return (
                  <li key={video.slice(6, 19)}>
                      <video
                        preload="auto"
                        width="320"
                        height="240"
                        controls
                      >
                        <source src={`${BACKEND_URI}/uploads/compressed-videos/${video}`} />
                        Your browser does not support the video tag.
                      </video>
                  </li>
              )
            })
            : <p>Upload videos and you'll see it here.</p>
          }
        </ul>
      </div>
    </div>
  );
};

UploadsVideosList.propTypes = {
};

UploadsVideosList.defaultProps = {
};

export default React.memo(UploadsVideosList);

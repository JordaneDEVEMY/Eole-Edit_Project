import React from "react";
import PropTypes from 'prop-types';

import './uploadsList.scss';
import { BACKEND_URI } from "../../config/constants";

const UploadsList = ({ medias }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <ul style={{listStyleType: "none"}}>
          {medias &&
            medias.map((video) => {
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
            })}
        </ul>
      </div>
    </div>
  );
};

UploadsList.propTypes = {
};

UploadsList.defaultProps = {
};

export default UploadsList;

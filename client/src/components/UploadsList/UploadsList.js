import React from "react";
import PropTypes from 'prop-types';

import { BACKEND_URI } from "../../config/constants";

const UploadsList = ({ medias }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <ul>
          {medias.length > 0
            ? medias.map((video) => {
              return (
                  <li key={video.slice(6, 19)}>
                  <a href={`${BACKEND_URI}/uploads/compressed-videos/${video}`} >{video}</a>
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

UploadsList.propTypes = {
};

UploadsList.defaultProps = {
};

export default React.memo(UploadsList);

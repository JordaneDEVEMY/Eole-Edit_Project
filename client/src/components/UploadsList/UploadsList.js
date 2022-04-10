import React from "react";
import PropTypes from 'prop-types';

import { BACKEND_URI } from "../../config/constants";

const UploadsList = ({ medias }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <ul style={{ listStyleType: "none"}} >
          {medias.length > 0
            ? medias.map((video) => {
              return (
                  <li key={video.slice(6, 19)}>
                  <button href={`${BACKEND_URI}/uploads/compressed-videos/${video}`} >&#9658; {video}</button>
                  </li>
              )
            })
            : <p>No video uploaded</p>
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

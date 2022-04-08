import React from "react";
import PropTypes from 'prop-types';

import './uploadsList.scss';
import { BACKEND_URI } from "../../config/constants";

const UploadsList = ({ medias }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <ul>
          {medias &&
            medias.map((video) => {
              return (
                  <li key={video.slice(6, 19)}>
                  <a href={`${BACKEND_URI}/uploads/compressed-videos/${video}`} >{video}</a>
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

export default React.memo(UploadsList);

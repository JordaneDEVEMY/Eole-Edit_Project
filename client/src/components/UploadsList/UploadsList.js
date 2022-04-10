import React from 'react';
import PropTypes from 'prop-types';

import { BACKEND_URI } from '../../config/constants';

function UploadsList({ medias, getVideoPlayerLink }) {
  return (
    <div className="row">

      { medias.length > 0
        ? (
          <ul style={{ listStyleType: 'none' }}>
            { medias.map((video) => (
              <div className="d-grid gap-2 mt-2" key={video}>

                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => { getVideoPlayerLink(`${BACKEND_URI}/uploads/compressed-videos/${video}`); }}
                >
                  &#9658;
                  &nbsp;
                  {video}
                </button>

              </div>
            ))}
          </ul>
        )
        : <p>No video uploaded</p> }

    </div>
  );
}

UploadsList.propTypes = {
  medias: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  getVideoPlayerLink: PropTypes.func.isRequired,
};

UploadsList.defaultProps = {
};

export default React.memo(UploadsList);

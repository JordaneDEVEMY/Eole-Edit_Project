import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function VideoPlayer({ videoSrc }) {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current?.load();
  }, [videoSrc]);

  return (
    <div className="row">
      <div className="col-md-12 container d-flex justify-content-center">
        <video
          ref={videoRef}
          preload="auto"
          width="640"
          height="480"
          controls
        >
          <track
            default
            kind="captions"
          />
          <source src={videoSrc} />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

VideoPlayer.propTypes = {
  videoSrc: PropTypes.string.isRequired,
};

VideoPlayer.defaultProps = {
};

export default React.memo(VideoPlayer);

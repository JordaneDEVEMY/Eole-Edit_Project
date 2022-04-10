import React, { useEffect } from "react";
import PropTypes from 'prop-types';


const VideoPlayer = ({ videoSrc }) => {
  
  useEffect(() => {
    console.log('file: videoPlayer.js ~ line 6 ~ VideoPlayer ~ videoSrc', videoSrc);
  }, [videoSrc])

  return (
    <div className="row">
      <div className="col-md-12">
        { videoSrc && <video
          preload="auto"
          width="640"
          height="480"
          controls
        >
          <source src={`${videoSrc}`}/>
          Your browser does not support the video tag.
        </video> }
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
};

VideoPlayer.defaultProps = {
};

export default React.memo(VideoPlayer);

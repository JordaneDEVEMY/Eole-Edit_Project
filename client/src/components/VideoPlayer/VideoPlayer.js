import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';


const VideoPlayer = ({ videoSrc }) => {
  
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current?.load();
  }, [videoSrc])

  return (
    <div className="row">
      <div className="col-md-12">
        <video
          ref={videoRef}
          preload="auto"
          width="640"
          height="480"
          controls
        >
          <source src={videoSrc}/>
          Your browser does not support the video tag.
        </video> 
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
};

VideoPlayer.defaultProps = {
};

export default React.memo(VideoPlayer);

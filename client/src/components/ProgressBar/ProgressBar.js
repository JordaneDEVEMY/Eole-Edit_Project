import React from 'react';
import PropTypes from 'prop-types';

function ProgressBar({ percentage }) {
  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped bg-success"
        role="progressbar"
        style={{ width: `${percentage}%` }}
      >
        {percentage}
        %
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default React.memo(ProgressBar);

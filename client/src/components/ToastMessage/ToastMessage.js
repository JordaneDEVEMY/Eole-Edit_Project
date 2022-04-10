import React from 'react';
import PropTypes from 'prop-types';

function ToastMessage({ msg }) {
  return (
    <div className="alert alert-info alert-dismissible fade show" role="alert">
      {msg}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

ToastMessage.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default React.memo(ToastMessage);

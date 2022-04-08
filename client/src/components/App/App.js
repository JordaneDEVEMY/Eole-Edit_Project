import React from 'react';
import PropTypes from 'prop-types';

import UploadForm from '../UploadForm/UploadForm.js';

const App = () => {
  return (
    <div className="App">
      <UploadForm />
    </div>
  );

}

App.propTypes = {
};

App.defaultProps = {
};

export default React.memo(App);

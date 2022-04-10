import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

// import AppHeader from '../AppHeader/AppHeader.js';
// import UploadForm from '../UploadForm/UploadForm.js';
import UploadsList from '../UploadsList/UploadsList.js';
// import UploadsVideosList from '../_UploadsVideosList/UploadsVideosList.js';

import { BACKEND_URI } from "../../config/constants";

// const App = () => {
  // const [medias, setMedias] = useState([]);

  // useEffect(() => {
  //   getAllMedias();
  // }, []);

  // const getAllMedias = () => {
  //   axios
  //     .get(`${BACKEND_URI}/files`)
  //     .then((result) => {
  //       setMedias(result.data);
  //     })
  //     .catch((error) => {
  //       setMedias([]);
  //       console.log(error);
  //       alert("Error happened!");
  //     });
  // };

//   return (
//     <>
//     <AppHeader />

//     <div className="column">

//       <div className="col-md-6">
//         <div
//           className="card"
//           style={{
//             height: "auto",
//             width: "800px",
//             margin: "40px",
//             border: "1px solid black",
//           }}
//         >
//           <div className="card-body">
//             <UploadForm getAllMedias={getAllMedias} />
//           </div>
//         </div>
//       </div>

//       <div className="col-md-6">
//         <div
//           className="card"
//           style={{
//             height: "auto",
//             width: "800px",
//             margin: "40px",
//             border: "1px solid black",
//           }}
//         >
//           <div className="card-body">
//             <UploadsList medias={medias} />
//           </div>
//         </div>
//       </div>

//       <div className="col-md-6">
//         <div
//           className="card"
//           style={{
//             height: "auto",
//             width: "800px",
//             margin: "40px",
//             border: "1px solid black",
//           }}
//         >
//           <div className="card-body">
//             <UploadsVideosList medias={medias} />
//           </div>
//         </div>
//       </div>

//     </div>
//   </>
//   );

// }

// App.propTypes = {
// };

// App.defaultProps = {
// };

// export default React.memo(App);

// import React from 'react';
import VideoUpload from '../VideoUpload/VideoUpload';

const App = () => {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    getAllMedias();
  }, []);

  const getAllMedias = () => {
    axios
      .get(`${BACKEND_URI}/files`)
      .then((result) => {
        setMedias(result.data);
      })
      .catch((error) => {
        setMedias([]);
        console.log(error);
        alert("Error happened!");
      });
  };

  return (
    <>
    <div className='container mt-4'>
      <h1 className='display-4 text-center mb-4'>
        <i className='fab fa-react' /> Eole Edit Upload Project
      </h1>
      <h4 className='display-4 mb-4'>
       Upload Videos here :
      </h4>
      <VideoUpload getAllMedias={getAllMedias} />
    </div>

    <div className='container mt-4'>
      <h4 className='display-4 mb-4'>
      Videos List :
      </h4>
      <UploadsList medias={medias} />
    </div>
    </>
  );
} 
export default App;

# Eole-Edit_Project

## Getting Started

In the CLIENT directory of the project...
1. Install node modules `yarn install` or `npm install`.

In the SERVER directory of the project...
1. Install node modules `yarn install` or `npm install`.
2. Create a .env file in server like the .env.example (keep PORT on 4000 please.)
If you want, you can change the LOW_RES with the resolution that you want.

Then, 
In the root directory of the project...
1. Install node modules `yarn install` or `npm install`.
2. Start app `yarn start` or `npm start`.

## File Structure

The front-end is based on [create-react-app](https://github.com/facebook/create-react-app).

The back-end is based on [Node / Express].

The front-end is served on http://localhost:3000/ and the back-end on http://localhost:4000/.

```
.
├── server/ - Express server that provides API routes and serves front-end
│ └── app
│   ├── routes/ - Handles API calls for routes
│   ├── index.js - Adds middleware to the express server
│   ├── controllers/ - Contains API logic
│   │ └── filesController - The controller for getAll videoFiles and delete the fullRes version
│   ├── public/ - Public Folder for videos uploading
│   │ └── uploads - Folder for uploaded videos
│   ├── helpers/ - Contains helpers middleware
│   │ ├── controllerHandler - Controller wrapper to manage errors
│   │ ├── errorHandler - Middleware that respond to a next method with an error as argument
│   │ ├── logger - Middleware to keep a history of server errors
│   │ └── uploadVideos - Video converter
│   └── index.js - Configures Port and HTTP Server
├── client/ - React front-end folder
│ └── src - React front-end
│   ├── components - React components for each page
│   ├── App.jsx - React routing
│   └── index.jsx - React root component
└── README.md
```

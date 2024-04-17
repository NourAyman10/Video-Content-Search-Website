import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './main/Main';
import VideoPage from './videoPage/VideoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Main /> */}
    <VideoPage />
  </React.StrictMode>
);
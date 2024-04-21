import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import Main from './Pages/main/Main';
import VideoPage from './Pages/videoPage/VideoPage';
import Loading from './Pages/loadingPage/Loading';


const router = createBrowserRouter([
  {
    path: "/Video-Content-Search-Website",
    element: <Main />,
  },
  {
    path: "/Video-Content-Search-Website/Loading",
    element: <Loading />,
  },
  {
    path: "/Video-Content-Search-Website/VideoPage",
    element: <VideoPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     {/* <Main /> */}
//     <VideoPage />
//   </React.StrictMode>
// );
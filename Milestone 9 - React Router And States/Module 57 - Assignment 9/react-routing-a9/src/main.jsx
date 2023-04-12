import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import JobDetail from './components/JobDetails/JobDetail';
import Dashboard from './components/Dashboard/Dashboard';
import MainPage from './components/MainPage/MainPage';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage></MainPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobs.json'),
      },
      {
        path: 'jobsDetail',
        element: <JobDetail></JobDetail>,
        loader: ({params}) => fetch("jobs.json"),
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  }  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

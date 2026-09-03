// This is where the Routing logic. A configuration file if you will, not a normal component.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from "./components/Layout/Layout.jsx";
import Profile from "./components/Profile/Profile.jsx";
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {path: '/', element: <App />},
      {path: '/profile', element: <Profile />},
      {path: '*', element: <PageNotFound />},
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

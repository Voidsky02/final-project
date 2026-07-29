import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Make sure the Header is always visible in all routes.
// Might have to move the browser router to a different file for this.
import Profile from "./components/Profile/Profile.jsx";
import Battle from "./components/Battle/Battle.jsx";

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/profile', element: <Profile />},
  {path: '/battle', element: <Battle />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App />  <-- I don't think I use the component directly here */}
  </StrictMode>,
)

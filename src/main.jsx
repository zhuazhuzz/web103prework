import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import ShowCreators from './pages/ShowCreators.jsx'
import ViewCreator from './pages/ViewCreator.jsx'
import NotFound from './pages/NotFound.jsx'
import AddCreator from './pages/AddCreator.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ShowCreators />,
    errorElement: <NotFound />
  },
  {
    path: '/add',
    element: <AddCreator />
  },
  {
    path: '/editCreator',
    element: <ViewCreator />
  },
  {
    path: '/addCreator',
    element: <ViewCreator />
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
)

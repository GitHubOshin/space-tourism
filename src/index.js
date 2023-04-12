import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
// import App from './App'
import HomePage from './pages/HomePage'
import DestinationPage from './pages/DestinationPage'
import CrewPage from './pages/CrewPage'
import TechnologyPage from './pages/TechnologyPage'
import reportWebVitals from './reportWebVitals'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: 'destination',
    element: <DestinationPage />
  },
  {
    path: 'crew',
    element: <CrewPage />
  },
  {
    path: 'technology',
    element: <TechnologyPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

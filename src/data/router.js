import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import DestinationPage from '../pages/DestinationPage'
import CrewPage from '../pages/CrewPage'
import TechnologyPage from '../pages/TechnologyPage'

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

export default router

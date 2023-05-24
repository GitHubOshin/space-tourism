import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import DestinationPage from '../pages/DestinationPage'
import CrewPage from '../pages/CrewPage'
import TechnologyPage from '../pages/TechnologyPage'
import DestinationContent from '../components/contents/DestinationContent'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/destinations',
    element: <DestinationPage />,
    children: [
      {
        path: ':destinationName',
        element: <DestinationContent />
      }
    ]
  },
  {
    path: '/crew',
    element: <CrewPage />
  },
  {
    path: '/technology',
    element: <TechnologyPage />
  }
])

export default router

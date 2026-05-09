import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import About from '../pages/About'
import ArtworkDetails from '../pages/ArtworkDetails'
import Contact from '../pages/Contact'
import Landing from '../pages/Landing'
import Painting from '../pages/Painting'
import Sculpture from '../pages/Sculpture'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'painting',
        element: <Painting />,
      },
      {
        path: 'sculpture',
        element: <Sculpture />,
      },
      {
        path: 'artwork/:id',
        element: <ArtworkDetails />,
      },
    ],
  },
])

export default router

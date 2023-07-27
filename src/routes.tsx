import { createBrowserRouter } from 'react-router-dom'
import Snippet from './components/snippet/Snippet'
import Menu from './components/menu/Menu'
import Component from './components/pages/Component'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Main Page</div>,
  },
  {
    path: 'components/:component',
    element: <Component />,
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
])

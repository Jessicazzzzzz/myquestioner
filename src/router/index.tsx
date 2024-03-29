import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import ManageLayout from '../layouts/ManageLayout'
import QuestionLayout from '../layouts/QuestionLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Register from '../pages/Register'
import Star from '../pages/manage/Star'
import Trash from '../pages/manage/Trash'
import Stat from '../pages/question/Stat'
import Edit from '../pages/question/Edit'
import List from '../pages/manage/List'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'star',
            element: <Star />,
          },
          {
            path: 'trash',
            element: <Trash />,
          },
          {
            path: 'list',
            element: <List />,
          }
        ]
      },
     
      {
        path:'*',
        element:<NotFound/>
      }
    ]
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'stat/:id',
        element: <Stat />,
      },
      {
        path: 'edit/:id',
        element: <Edit />,
      }
    ]
  },
])
  export default router
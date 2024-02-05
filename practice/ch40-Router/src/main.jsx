import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Root/App.jsx'
import { RouterProvider,  createBrowserRouter } from 'react-router-dom'
import CreatePost, { creatPost } from './components/CreatePost.jsx'
import { PostLoader } from './components/PostList.jsx'
import PostList from './components/PostList.jsx'

const route = createBrowserRouter([
  {
    path : "/",
    element :   <App />,
    children : [{
      path : "/",
      element :   <PostList />,
      loader : PostLoader,
      action : creatPost
    },
    {
      path : "/Create Post",
      element : <CreatePost></CreatePost>
    },],
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  
  </React.StrictMode>,
)

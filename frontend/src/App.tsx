import './App.css'

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import Error from './pages/Error';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Cuisine from './pages/Cuisine';

import { blogIndex } from './blogIndex';

// TODO: lazy load blog routes?

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<Error />} />
      <Route path="/resume" element={<Resume />} errorElement={<Error />} />
      <Route path="/contact" element={<Contact />} errorElement={<Error />} />
      <Route path="/blog" element={<Blog />} errorElement={<Error />} />
      <Route path="/cuisine" element={<Cuisine />} errorElement={<Error />} />
      {
        blogIndex.map((blogItem) => (
          <Route
            key={`blog-${blogItem.meta.href}`}
            path={`/blog/${blogItem.meta.href}`}
            element={blogItem.page()}
            errorElement={<Error />} />
        ))
      }
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App

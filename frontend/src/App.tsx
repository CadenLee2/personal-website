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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<Error />} />
      <Route path="/resume" element={<Resume />} errorElement={<Error />} />
      <Route path="/contact" element={<Contact />} errorElement={<Error />} />
      <Route path="/blog" element={<Blog />} errorElement={<Error />} />
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App

import './App.css'
import PageFrame from './components/PageFrame';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import { LinkButton } from './components/Button';

function Home() {
  return (
    <PageFrame pageName="home">
      <div className="section">
        <h2>Section</h2>
      </div>
      <div className="section">
        <h2>Section 2</h2>
      </div>
    </PageFrame>
  );
}

// TODO: fix button styles
function Error() {
  return (
    <PageFrame>
      <div className="section error">
        <h2>Page not found</h2>
        This page does not exist!
        <br />
        <br />
        <LinkButton variant="blue" href="/">Home</LinkButton>
      </div>
    </PageFrame>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} errorElement={<Error />}>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App

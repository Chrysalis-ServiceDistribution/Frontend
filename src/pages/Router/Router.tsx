import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../Home/Home';
import Authentication from '../Authentication/Authentication';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import Search from '../Search/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth',
    element: <Authentication />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  // FIXME: Make profile page
  {
    path: '/:userID',
    element: <div>Profile</div>,
  },
  // FIXME: Page to show all the services
  {
    path: '/:userID/services',
    element: <div>Services</div>,
  },
  // FIXME
  {
    path: '/:userID/services/create',
    element: <div>Create Service</div>,
  },
  {
    path: '/:userID/services/:servID',
    element: <ServiceDetail />,
  },
  // FIXME
  {
    path: '/:userID/services/:servID/submit-task',
    element: <div>Create Task</div>,
  },
  // FIXME
  {
    path: '/:userID/services/:servID/update-service',
    element: <div>Update Service</div>,
  },
  {
    path: '/:userID/tasks',
    element: <div>User Tasks</div>,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Authentication from '../Authentication/Authentication';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import Search from '../Search/Search';
import CreateService from '../CreateService/CreateService';
import UserServices from '../UserServices/UserServices';
import SubmitTask from '../SubmitTask/SubmitTask';
import Navbar from '../../components/Navbar/Navbar';
import { Flex } from '@radix-ui/themes';
import ProtectedPage from '../ProtectedPage/ProtectedPage';

const NavbarWrapper = () => (
  <Flex direction="column" justify="center" gap="4">
    <Navbar />
    <Outlet />
  </Flex>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarWrapper />,
    children: [
      {
        path: '/',
        element: <ProtectedPage><Home /></ProtectedPage>
      },
      {
        path: '/auth',
        element: <Authentication />,
      },
      {
        path: '/search',
        element: <ProtectedPage><Search /></ProtectedPage>,
      },
      // FIXME: Make profile page
      {
        path: '/:userID',
        element: <Profile />,
      },
      // FIXME: Page to show all the services
      {
        path: '/:userID/services',
        element: <ProtectedPage><UserServices /></ProtectedPage>
      },
      // FIXME
      {
        path: '/:userID/services/create',
        element: <ProtectedPage><CreateService /></ProtectedPage>
      },
      {
        path: '/:userID/services/:servID',
        element: <ProtectedPage><ServiceDetail /></ProtectedPage>
      },
      // FIXME
      {
        path: '/:userID/services/:servID/submit-task',
        element: <ProtectedPage><SubmitTask /></ProtectedPage>
      },
      // FIXME
      {
        path: '/:userID/services/:servID/update-service',
        element: <ProtectedPage><div>Update Service</div></ProtectedPage>
      },
      {
        path: '/:userID/tasks',
        element: <ProtectedPage><div>User Tasks</div></ProtectedPage>
      },
    ],
  },
]);

export default function Router() {
  return (
    <Flex direction="column" align="stretch" gap="2">
      <RouterProvider router={router} />
    </Flex>
  );
}

import HomePage from '../Pages/HomePage';
import ProfilePage from '../Pages/ProfilePage';

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/user-profile',
    element: <ProfilePage />,
  },
];

export default routes;

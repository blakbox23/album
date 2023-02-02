import UserDetails from '../src/pages/UserDetails';
import AlbumDetails from '../src/pages/AlbumDetails';
import PhotoDetails from '../src/pages/PhotoDetails';
import Home from '../src/pages/Home';
import LandingPage from '../src/pages/LandingPage';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: <Home />,
  },
  {
    path: '/',
    name: 'LandingPage',
    component: <LandingPage />,
  },
  {
    path: '/users/:id',
    name: 'UserDetails',
    component: <UserDetails />,
  },
  {
    path: '/albums/:id',
    name: 'AlbumDetails',
    component: <AlbumDetails />,
  },
  {
    path: '/photos/:id',
    name: 'PhotoDetails',
    component: <PhotoDetails />,
  },

];

export default routes;

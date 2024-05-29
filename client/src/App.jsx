import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout, RequireAuth } from './routes/layout/Layout';
import Home from './routes/home/Home';
import Login from './routes/login/Login';
import NewPost from './routes/newPost/NewPost';
import Profile from './routes/profile/Profile';
import ProfileUpdate from './routes/profileUpdate/ProfileUpdate';
import Register from './routes/register/Register';
import Search from './routes/search/Search';
import SingleArtist from './routes/singleArtist/SingleArtist';
import SingleArena from './routes/singleArena/SingleArena';
import SingleEvent from './routes/singleEvent/SingleEvent';
import SingleUser from './routes/singleUser/SingleUser';
import Artists from './routes/artists/Artists';
import Arenas from './routes/arenas/Arenas';
import Events from './routes/events/Events';
import Users from './routes/users/Users';
import EditPost from './routes/editPost/EditPost';
import T from './routes/t/T';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/search',
          element: <Search />,
        },
        {
          path: '/artists',
          element: <Artists />,
        },
        {
          path: '/arenas',
          element: <Arenas />,
        },
        {
          path: '/events',
          element: <Events />,
        },
        {
          path: '/users',
          element: <Users />,
        },
        {
          path: '/artist/:id',
          element: <SingleArtist />,
        },
        {
          path: '/arena/:id',
          element: <SingleArena />,
        },
        {
          path: '/event/:id',
          element: <SingleEvent />,
        },
        {
          path: '/user/:id',
          element: <SingleUser />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
      ],
    },
    {
      path: '/',
      element: <RequireAuth />,
      children: [
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/profile/update',
          element: <ProfileUpdate />,
        },
        {
          path: '/event/add',
          element: <NewPost />,
        },
        {
          path: '/event/edit/:id',
          element: <EditPost />,
        },
        {
          path: '/t',
          element: <T />,
        },
        {
          path: '/t/:id',
          element: <T />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

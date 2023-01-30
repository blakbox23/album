import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import UserDetails from './pages/UserDetails'
import AlbumDetails from './pages/AlbumDetails'
import PhotoDetails from './pages/PhotoDetails'
import AppNav from './components/AppNav'
import LandingPage from './pages/LandingPage'

function App() {

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
    
  ]

  return (
    <div>
      {true ? (
        <>
          <AppNav />
          <Routes>
            {routes.map(({ path, component }) => (
              <Route path={path} key={path} element={component} />
            ))}
          </Routes>
        </>
      ) : (
        <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
        </>
      )}
    </div>
  )
}

export default App



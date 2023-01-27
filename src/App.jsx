import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import UserDetails from './pages/UserDetails'
import AlbumDetails from './pages/AlbumDetails'

function App() {

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/sign-up" element={<Signup />} />
    <Route path="/users/:id" element={<UserDetails />} />
    <Route path="/albums/:id" element={<AlbumDetails />} />


  </Routes>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import UserDetails from './pages/UserDetails'
import AlbumDetails from './pages/AlbumDetails'
import PhotoDetails from './pages/PhotoDetails'

function App() {

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/sign-up" element={<Signup />} />
    <Route path="/users/:id" element={<UserDetails />} />
    <Route path="/albums/:id" element={<AlbumDetails />} />
    <Route path="/photos/:id" element={<PhotoDetails />} />


  </Routes>
  )
}

export default App

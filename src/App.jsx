import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import UserDetails from './pages/UserDetails'

function App() {

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/sign-up" element={<Signup />} />
    <Route path="/users/:id" element={<UserDetails />} />

  </Routes>
  )
}

export default App

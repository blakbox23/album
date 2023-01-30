import { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AppNav from './components/AppNav'
import LandingPage from './pages/LandingPage'
import {routes} from '../router/routes'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './authConfig/firebase'

function App() {

const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          sessionStorage.setItem('albumUser', uid);


          // ...
          console.log("uid", uid)
        } else {

          // User is signed out
          // ...
          sessionStorage.removeItem('albumUser');
          console.log("user is logged out")
        }
      });
     
}, [])
console.log("sessionStorage.getItem('albumUser')")
console.log(sessionStorage.getItem('albumUser'))
  return (
    <div>
      {sessionStorage.getItem('albumUser') != null ? (
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



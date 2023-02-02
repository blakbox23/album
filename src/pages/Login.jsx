import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import GoogleSignin from '../components/GoogleSignin';
import { auth } from '../authConfig/firebase';
import { errorToast } from '../components/Toast';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/home');
        // Signed in
        const { user } = userCredential;
        sessionStorage.setItem('albumUser', user.uid);
      })
      .catch((error) => {
        const errorMessage = error.message;

        errorToast(errorMessage);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="auth-page">
        <div className="w-50 h-100 d-none d-sm-flex login-banner">
          <div className="d-flex justify-content-center align-items-center m-auto text-white fs-2 login-image">
            {/* <img style ={{width: "100%"}} src="../public/images/loginCam.jpg" alt="" /> */}
          </div>
        </div>
        <div className="d-flex p-4 border flex-column justify-content-center align-items-center mobile">
          <h1 className="fs-4 fw-bold mb-3">Log in</h1>

          <form className="d-flex flex-column w-75" aria-label="login">
            <label className="mb-2" htmlFor="Email">
              <p className="mb-1">Email</p>
              <input
                className="p-2 ps-3 w-100 inpt"
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email address" 
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="mb-2" htmlFor="password">
              <p className="mb-1">Password</p>
              <input
                className="p-2 ps-3 w-100 inpt"
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <Button onClick={onLogin} className="mt-3 mb-3" variant="secondary">
              Login
            </Button>
            <p style={{ textAlign: 'center' }}>or</p>
          </form>
          <div className="google-btn-container">
            <GoogleSignin />
          </div>

          <p className="mb-1">
            No account yet?
            {' '}
            <NavLink
              style={{
                textDecoration: 'none',
                fontWeight: 'bold',
                color: '#5c636a',
              }}
              to="/sign-up"
            >
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

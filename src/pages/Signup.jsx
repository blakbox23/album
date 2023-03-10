import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Button } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { auth } from '../authConfig/firebase';
import GoogleSignin from '../components/GoogleSignin';
import { errorToast } from '../components/Toast';

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;

        sessionStorage.setItem('albumUser', user.uid);
        navigate('/home');
      })
      .catch((error) => {
        const errorMessage = error.message;
        errorToast(errorMessage);
      });
  };

  return (
    <div className="auth-page">
      <ToastContainer />
      <div className="d-flex p-4 border flex-column justify-content-center align-items-center mobile">
        <h1 className="fs-4 fw-bold mb-3">Join our community</h1>
        <form className="d-flex flex-column w-75" aria-label="signup">
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

          <label className="mb-2" htmlFor="Password">
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

          <Button onClick={onSubmit} className="mt-3 mb-3" variant="secondary">
            Sign up
          </Button>

          <p style={{ textAlign: 'center' }}>or</p>
        </form>

        <div className="google-btn-container">
          <GoogleSignin />
        </div>

        <p>
          Already have an account?
          {' '}
          <NavLink
            style={{
              textDecoration: 'none',
              fontWeight: 'bold',
              color: '#5c636a',
            }}
            to="/login"
          >
            Sign in
          </NavLink>
        </p>
      </div>
      <div className="w-50 h-100 d-none d-sm-flex login-banner">
        <div className="d-flex justify-content-center align-items-center m-auto text-white fs-2 login-image" />
      </div>
      {' '}

    </div>
  );
};

export default Signup;

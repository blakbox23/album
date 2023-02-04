import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { auth } from '../authConfig/firebase';
import googleProvider from '../authConfig/authMethods';
import { errorToast } from './Toast';

function GoogleSignin() {
  const navigate = useNavigate();

  const handleOnClick = (provider) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { user } = result;
        console.log(user);
        navigate('/home');
      }).catch((error) => {
      // Handle Errors here.
        const errorMessage = error.message;
        errorToast(errorMessage);
      });
  };

  return (
    <div className="GoogleSignin">
      <button type="button" className="google-btn" onClick={() => handleOnClick(googleProvider)} aria-label="google-btn">
        <FcGoogle style={{ fontSize: '1.5rem' }} />
        {' '}
        Sign up with Google
      </button>
    </div>
  );
}

export default GoogleSignin;

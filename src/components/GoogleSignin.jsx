import { googleProvider } from "../authConfig/authMethods";
import {auth} from "../authConfig/firebase"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {FcGoogle} from "react-icons/fc"


function GoogleSignin() {
  const navigate =useNavigate()

  const handleOnClick =  (provider) => {

    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      navigate('/home')
      console.log('user')
      console.log(user.displayName)

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  };


  return (
    <div className="GoogleSignin">
      <button className ="google-btn" onClick={() => handleOnClick(googleProvider)}><FcGoogle style={{fontSize:"1.5rem"}}/> Sign up with Google</button>
    </div>
  );
}

export default GoogleSignin;

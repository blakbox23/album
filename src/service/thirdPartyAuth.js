// import { googleProvider } from "../authConfig/authMethods";
// import {auth} from "../authConfig/firebase"
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";



//   const thirdPartyAuth =  (provider) => {

//     signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result;
//       console.log('user')
//       console.log(user.displayName)
//       return result

//     }).catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//     //   const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       return errorMessage
//     });
//   };

//   export default thirdPartyAuth;
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBZDRYdza-LphBOx_SePXcb2x9WPenfLqg',
  authDomain: 'album-c0d08.firebaseapp.com',
  projectId: 'album-c0d08',
  storageBucket: 'album-c0d08.appspot.com',
  messagingSenderId: '163835731416',
  appId: '1:163835731416:web:6982a7e1d20c9c65fca6ad',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCw3j7MNeYVj7-adHA43G4Qbxure3Xk1j0',
  authDomain: 'artifact-vault-916d6.firebaseapp.com',
  projectId: 'artifact-vault-916d6',
  storageBucket: 'artifact-vault-916d6.firebasestorage.app',
  messagingSenderId: '774105094269',
  appId: '1:774105094269:web:d8dafbd4dc4e7e75483914',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

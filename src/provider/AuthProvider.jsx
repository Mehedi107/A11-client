import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import toast from 'react-hot-toast';
import axios from 'axios';

export const notifyError = msg => toast.error(msg);
export const notifySuccess = msg => toast.success(msg);

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => signOut(auth);

  const loginWithGoogle = () => signInWithPopup(auth, provider);

  const forgetPassword = email => sendPasswordResetEmail(auth, email);

  // Show Logged in user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async user => {
      setUser(user);
      if (user?.email) {
        // Get jwt token form server
        const { data } = await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/jwt`,
          {
            email: user?.email,
          },
          { withCredentials: true }
        );
        console.log(data);
      } else {
        setUser(user);
        // Clear cookie
        const { data } = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/logout`,
          {
            withCredentials: true,
          }
        );
        console.log(data);
      }
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        createUser,
        login,
        signOutUser,
        loginWithGoogle,
        forgetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import initializeAuthentication from "../Firebase/firebase.initialize";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
initializeAuthentication();
const useFirebase = () => {
  const auth = getAuth();
  const googleProvide = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  //email register
  const registerUsingEmail = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //email login
  const loginUsingEmail = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google signIn
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvide);
  };
  //update profile
  const setUserName = (name) => {
    console.log(name);
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => setError(error.message));
  };

  //logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        console.log("signedout");
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  return {
    user,
    isLoading,
    error,
    logOut,
    registerUsingEmail,
    loginUsingEmail,
    signInUsingGoogle,
    setUserName,
    setIsLoading,
    setError,
  };
};
export default useFirebase;

import initializeAuthentication from "../Firebase/firebase.initialize";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
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
  //email register
  const registerUsingEmail = (email, password) => {
    // setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      setUser(result.user);
      console.log("signup");
    });
    // .finally(() => setIsLoading(false));
  };
  //email login
  const loginUsingEmail = (email, password) => {
    // setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      setUser(result.user);
      console.log("signIn");
    });
    // .finally(() => setIsLoading(false));
  };
  //google signIn
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvide);
  };
  //logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        console.log("signedout");
      })
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
    // isLoading,
    logOut,
    registerUsingEmail,
    loginUsingEmail,
    signInUsingGoogle,
    setIsLoading,
    isLoading,
  };
};
export default useFirebase;

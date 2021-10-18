import initializeAuthentication from "../Firebase/firebase.initialize";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState();
};
export default useFirebase;

import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  // createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import firebaseInitaApp from "../firebase.init";

firebaseInitaApp();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };
  // const createUser = () => {
  //   createUserWithEmailAndPassword(auth, email, password).then(
  //     (userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // ...
  //     }
  //   );
  // };

  const logOut = () => {
    signOut(auth).then(() => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribe;
  }, []);

  return {
    user,
    logOut,
    signInUsingGoogle,
  };
};

export default useFirebase;

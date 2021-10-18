import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import firebaseIntailize from '../Firebase/firebase.init';

const useFirebase=()=>{
  firebaseIntailize();
  const [user, setUser] = useState({});
  const [isLoading ,setLoading] =useState(true)
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider).then((result) =>
      setUser(result.user)
    ).finally(setLoading(false))
  };

//register by email password

const handleRegister=(email,password)=>{
  console.log(email)
  createUserWithEmailAndPassword(auth,email,password)
  .then(result=>{})
}
// handle login
const handleLogin=(email,password)=>{
  console.log(email)
  signInWithEmailAndPassword(auth,email,password)
  .then(result=>{ 
  })
}



  const logOut = () => {
    setLoading(true)
    signOut(auth).then(() => {})
    .finally(setLoading(false))
  };

  useEffect(() => {
    const unsubsribed = onAuthStateChanged(auth, (user) => {
      user? setUser(user) : setUser(user)
      setLoading(false);
    });
    return unsubsribed;
  }, []);

  return {
    user,
    signInUsingGoogle,
    logOut,
    handleRegister,
    isLoading,
    handleLogin
  };
}

export default useFirebase


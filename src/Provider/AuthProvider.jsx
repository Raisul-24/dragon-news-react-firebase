import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   

   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   }

   const logIn = (email,password) =>{
      return signInWithEmailAndPassword(auth,email,password);
   }

   const logout = () =>{
      return signOut(auth);
   }
   useEffect( ()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
         console.log("User in the auth state changed", currentUser);
         setUser(currentUser);
      });
      return () =>{
         unsubscribe();
      }
   },[])
   const authInfo = {
      user,
      createUser,
      logout,
      logIn
   }

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;

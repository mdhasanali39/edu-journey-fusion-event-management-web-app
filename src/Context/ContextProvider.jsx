import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebaseConfig";

export const AuthContext = createContext();

// creating instance of google provider object
const provider = new GoogleAuthProvider();

const ContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // Sign up new users with an email address and password
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password);
    }

    // Sign in a user with an email address and password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // To sign in with a pop-up window
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    // update user profile 
    const profileUpdate = (name, imgUrl) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: imgUrl
        })
    }

    // observer 
    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser);
        })
        return () =>{
            return unSubscriber();
        }
    },[])

    // To sign out a user
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    const authData = {
        user,
        createUser,
        signIn,
        googleSignIn,
        profileUpdate,
        logOut,
        loading,
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;
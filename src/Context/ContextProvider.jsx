import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/firebaseConfig";

export const AuthContext = createContext();

// creating instance of google provider object
const provider = new GoogleAuthProvider();

const ContextProvider = ({children}) => {

    // Sign up new users with an email address and password
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email,password);
    }

    // Sign in a user with an email address and password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // To sign in with a pop-up window
    const googleSignIn = () =>{
        return signInWithPopup(auth, provider);
    }

    // To sign out a user
    const logOut = () =>{
        return signOut(auth);
    }


    const authData = {
        createUser,
        signIn,
        googleSignIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;
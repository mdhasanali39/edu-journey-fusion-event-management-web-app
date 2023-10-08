
import { createContext } from "react";


export const AuthContext = createContext();



const ContextProvider = ({children}) => {

    


    const authData = {

    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;
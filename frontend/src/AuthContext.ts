import { createContext } from "react";
import { TokenData } from "util/auth";

export type AuthContextData = {
    authenticated: boolean,
    tokenData?: TokenData
};

export type AuthContexType = {
    authContextData: AuthContextData,
    setAuthContextData: (authContextData: AuthContextData) => void;
};

export const AuthContext = createContext<AuthContexType>({
    authContextData: {
        authenticated: false,
    },
    setAuthContextData: () => null
});
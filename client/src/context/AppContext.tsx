import { createContext, type ReactNode } from "react";
import type { AxiosInstance }  from "axios";

interface User {
    id:string;
    name:string;
    email:string;
    plan:string;
    AnalaysisCount?: number;

}

interface AppContextType {
    user: User | null;
    token: string | null;
    loading: boolean;
    api: AxiosInstance;
    login:(email:string,passowrd:string)=>Promise<{success:boolean,message?:string}>;
    register:(name:string,email:string,passowrd:string)=>Promise<{success:boolean,message?:string}>;
    logout:()=>void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({children}: {children:ReactNode}) {
    const value={}
    return <AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider>
}
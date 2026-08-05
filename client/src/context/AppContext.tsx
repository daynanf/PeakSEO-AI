import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { AxiosInstance }  from "axios";
import axios from "axios";

interface User {
    id:string;
    name:string;
    email:string;
    plan:string;
    AnalysisCount?: number;

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

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({children}: {children:ReactNode}) {
    const [user,setUser] = useState<User | null>(null);
    const [token,setToken] = useState<string | null>(localStorage.getItem("token"));
    const [loading,setLoading] = useState(true);

    const api = axios.create({
        baseURL: backendUrl
    })

    api.interceptors.request.use((config)=>{
        const token =localStorage.getItem("token");
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    })

    const loadUser = async () =>{
        if(!token){
            setLoading(false);
            return;
        }
        try {
             const { data } = await api.get('/api/auth/user')
             if(data.success){
                setUser(data.user)
             }
        } catch (error) {
            localStorage.removeItem("token");
            setToken(null)
            setUser(null)
        } 
        setLoading(false);   
    }

    useEffect(()=>{
        loadUser()
    },[])

    const login = async (email: string, password:string) =>{
        try {
            const res =await axios.post(`${backendUrl}/api/auth/login`,{email,password});
            if (res.data.success){
                setToken(res.data.token);
                setUser(res.data.user);
                localStorage.setItem("token",res.data.token);
                return {success: true}
            }
            return {success: false, message: res.data.message}
        } catch (error: any) {
            return {success: false, message: error.response.data.message}
        }
    }

    const register = async (name: string, email: string, password: string) =>{
        try {
            const res = await axios.post(`${backendUrl}/api/auth/register`,{name,email,password});
            if (res.data.success){
                setToken(res.data.token);
                setUser(res.data.user);
                localStorage.setItem("token",res.data.token);
                return {success: true}
            }
            return {success: false, message: res.data.message}
        } catch (error: any) {
            return {success: false, message: error.response.data.message || "Registration failed"}
        }
    }

    const logout = async () =>{
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
    }
    
    const value={user, token, loading, api, login, register, logout};

    
    
    return <AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider>
}

export function useApp(){
    const context = useContext(AppContext);
    if(!context) throw new Error("useApp must be used within AppProvider");
    return context;
}
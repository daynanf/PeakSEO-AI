import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";


export default function App(){
     const location = useLocation();

    const hideNavbar = ["/login", "/register"].includes(location.pathname);

    return (
        <> 
            <Toaster/>
            {!hideNavbar && <Navbar/>}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login state="login" />} />
                <Route path="/register" element={<Login state="register"/>} />
            </Routes>
        </>
        
    )
}
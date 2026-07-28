import { Route, Routes, useLocation} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Analyze from "./pages/analyze";


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
                <Route element={<ProtectedRoute/>}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/analyze" element={<Analyze />} />


                </Route>
            </Routes>
        </>
        
    )
}
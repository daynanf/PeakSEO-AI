import { Navigate, Route, Routes, useLocation} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Analyze from "./pages/analyze";
import RankTracker from "./pages/RankTracker";
import RankDetail from "./pages/RankDetail";
import Report from "./pages/Report";
import History from "./pages/History";
import { useApp } from "./context/AppContext";


export default function App(){
    const location = useLocation();
    const {user, loading} = useApp();

    const hideNavbar = ["/login", "/register"].includes(location.pathname);

    return (
        <> 
            <Toaster/>
            {!hideNavbar && <Navbar/>}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={user? <Navigate to="/dashboard" replace /> : <Login state="login" />} />
                <Route path="/register" element={user? <Navigate to="/dashboard" replace /> : <Login state="register" />} />
                <Route element={<ProtectedRoute/>}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/analyze" element={<Analyze />} />
                    <Route path="/rank-tracker" element={<RankTracker/>}/>
                    <Route path="/rank/:id" element={<RankDetail/>} />
                     <Route path="/report/:id" element={<Report />} />
                    <Route path="/history" element={<History />} />
                </Route>
            </Routes>
        </>
        
    )
}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import User from "./Pages/User";
import CreateUser from "./Pages/CreateUser";
import UpdateUser from "./Pages/UpdateUser";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { useEffect, useState } from "react";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in based on your authentication mechanism
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);
 
 
  return (
    <div className="w-full max-h-full bg-gray-500 ">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={isLoggedIn ? <User /> ? <CreateUser/> :<Login/> : <Login/>} />
          <Route path="/create" element={isLoggedIn ? <CreateUser /> : <Login/>} />
          <Route path="/edit/:id" element={<UpdateUser />} />
        </Routes>
      </Router>
    </div>
  );
}

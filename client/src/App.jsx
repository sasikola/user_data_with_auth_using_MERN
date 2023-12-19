import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import User from "./Pages/User";
import CreateUser from "./Pages/CreateUser";
import UpdateUser from "./Pages/UpdateUser";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

export default function App() {
 

 
 

  return (
    <div className="w-full max-h-full bg-gray-500 ">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
<<<<<<< HEAD
          <Route path="/user" element={<User />} />
          <Route path="/create" element={<CreateUser />} />
=======
          <Route path="/user" element={!isLoggedIn ? <Login/> :<User/>} />
          <Route path="/create" element={isLoggedIn ? <CreateUser /> : <Login/>} />
>>>>>>> 7d40c80e3f227949387ad3d751d185d34d924d52
          <Route path="/edit/:id" element={<UpdateUser />} />
        </Routes>
      </Router>
    </div>
  );
}

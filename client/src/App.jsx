import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route path="/user" element={<User />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/user" element={<User />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/edit/:id" element={<UpdateUser />} />
        </Routes>
      </Router>
    </div>
  );
}

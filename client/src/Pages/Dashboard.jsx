import NoDataFound from "./NoDataFound";
import UserCard from "./UserCard";
import AddUserButton from "./AddUserButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getUser } from "../Redux/userSlice";
import ShowUsers from "./ShowUsers";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  // const [users, setUsers] = useState([]);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in based on your authentication mechanism
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

<<<<<<< HEAD
  

=======
axios.defaults.withCredentials = true;
>>>>>>> 7d40c80e3f227949387ad3d751d185d34d924d52
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://user-mern-api.vercel.app/getData");
        dispatch(getUser(response.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="flex justify-end ">
          <AddUserButton />
          <ShowUsers />
        </div>
        <header className=" text-gray text-center">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
        </header>
        <main className="container mx-auto mt-6 p-4">
          {users.length === 0 ? (
            <NoDataFound />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {users.map((user, index) => (
                <UserCard key={index} user={user} />
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default Dashboard;

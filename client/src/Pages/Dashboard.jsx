import NoDataFound from "./NoDataFound";
import UserCard from "./UserCard";
import AddUserButton from "./AddUserButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getUser } from "../Redux/userSlice";
import ShowUsers from "./ShowUsers";

function Dashboard() {
  // const [users, setUsers] = useState([]);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/getData");
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

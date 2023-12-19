import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, getUser } from "../Redux/userSlice";
import UserCard from "./UserCard";
import AddUserButton from "./AddUserButton";
import ShowUsers from "./ShowUsers";
import DeleteUser from "./DeleteUser";

function User() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  axios.defaults.withCredentials = true;

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
        <div className="flex justify-end pt-2">
          <AddUserButton />
          <ShowUsers />
        </div>

        <div className="flex min-h-screen items-center justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2 bg-white rounded p-4 shadow-lg">
            <Link
              to="/create"
              className="bg-green-500 text-white px-2 py-1 rounded-md"
            >
              Add +
            </Link>
            <table className="table-auto w-full mt-4">
              <thead>
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Age</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.age}</td>
                    <td className="px-4 py-2">
                      <Link
                        to={`/edit/${user.id}`}
                        className="bg-green-500 text-white px-2 py-1 rounded-md me-2"
                      >
                        Update
                      </Link>
                      <DeleteUser userId={user.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;

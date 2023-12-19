import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Redux/userSlice";
import AddUserButton from "./AddUserButton";
import ShowUsers from "./ShowUsers";
import { Toaster, toast } from "react-hot-toast";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/create", { name, email, age })
      .then((res) => {
        dispatch(addUser(res.data));
        toast.success(`${name} is added!`);
        navigate("/");
      });
  };

  useEffect(() => {
    // Check if the user is logged in based on your authentication mechanism
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

 
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Toaster />
        <div className="flex justify-end">
          <AddUserButton />
          <ShowUsers />
        </div>
        <div className="flex min-h-screen  items-center justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white rounded p-4 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-2xl font-semibold">Add User</h2>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="form-input mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-100 focus:ring focus:ring-indigo-100 focus:ring-opacity-50"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="form-input mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-600">
                  Age
                </label>
                <input
                  type="number"
                  placeholder="Enter Age"
                  className="form-input mt-1 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateUser;

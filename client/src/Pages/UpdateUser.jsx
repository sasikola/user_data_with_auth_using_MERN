import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatedUser } from "../Redux/userSlice";

function UpdateUser() {
  const users = useSelector((state) => state.users.users);
  const { id } = useParams();
  const user = users.find((u) => u.id === id);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [age, setAge] = useState(user.age);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/update/" + id, { name, email, age })
      .then((res) => {
        console.log(res);
        dispatch(updatedUser({ id, name, email, age }));
        navigate("/");
      });
  };
  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center">
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white rounded p-4 shadow-lg">
        <form onSubmit={handleUpdate} className="space-y-4">
          <h2 className="text-2xl font-semibold">Update User</h2>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-input mt-1 py-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              className="form-input mt-1 py-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-600">
              Age
            </label>
            <input
              type="number"
              placeholder="Enter Age"
              className="form-input mt-1 py-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-2 py-1 rounded-md"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;

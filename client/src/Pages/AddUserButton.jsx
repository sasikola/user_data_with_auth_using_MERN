// src/components/AddUserButton.jsx

import { Link } from "react-router-dom";

const AddUserButton = () => (
  <div className="mt-2 sm: mb-6">
    <Link
      to="/create"
      className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600"
    >
      Add User
    </Link>
  </div>
);

export default AddUserButton;

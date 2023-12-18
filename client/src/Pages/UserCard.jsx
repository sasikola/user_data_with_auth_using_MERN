// src/components/UserCard.jsx

import { Link } from "react-router-dom";
import DeleteUser from "./DeleteUser";

const UserCard = ({ user, handleDelete }) => (
  <div className="bg-white p-4 shadow-md rounded-md mb-4">
    <p className="text-lg font-semibold mb-2">{user.name}</p>
    <p className="text-gray-600 mb-2">{user.email}</p>
    <p className="text-gray-600">{user.age}</p>
    <Link
      to={`/edit/${user.id}`}
      className="bg-green-500 text-white px-2 py-1 rounded-md  me-2"
    >
      Update
    </Link>

    <DeleteUser userId={user.id} />
  </div>
);

export default UserCard;

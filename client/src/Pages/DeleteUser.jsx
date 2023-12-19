// DeleteUser.jsx

import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteUser } from "../Redux/userSlice";

const DeleteUser = ({ userId }) => {
  const dispatch = useDispatch();
axios.defaults.withCredentials = true;
  const handleDelete = () => {
    axios
      .delete(`https://user-mern-api.vercel.app/deleteUser/${userId}`)
      .then((res) => {
        console.log(res);
        dispatch(deleteUser({ id: userId }));
      })
      .catch((err) => console.log(err));
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-2 py-1 rounded-md"
    >
      Delete
    </button>
  );
};

export default DeleteUser;

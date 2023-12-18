import { Link } from "react-router-dom";

function ShowUsers() {
  return (
    <div className="mx-2 mt-2 sm:mb-4">
      <Link
        to="/user"
        className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600"
      >
        Show USers
      </Link>
      
    </div>
  );
}

export default ShowUsers;

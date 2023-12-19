import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const history = useHistory(); // Create a history object for navigation/
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    // Check if the user is logged in based on your authentication mechanism
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://user-mern-api.vercel.app/api/auth/signin",
        loginData
      );
      console.log(response.data);

      // Save the JWT token in local storage for authentication
      localStorage.setItem("token", response.data.token);

      // Show an alert and navigate to the home page on successful login
      toast.success("User logged in successfully!");
      navigate("/");
      window.location.reload(false);
      // history.push('/home'); // Adjust the route according to your application
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border rounded-md w-full"
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 border rounded-md w-full"
                onChange={handleChange}
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

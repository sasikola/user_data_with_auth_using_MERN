import { toast } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    gender: "",
    howDidYouHear: "",
    city: "",
    state: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: type === "checkbox" ? checked : value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("https://user-mern-api.vercel.app/api/auth/signup", formData)
        .then((res) => {
          console.log(res.data);
          navigate("/login")
          toast.success("User Registered Successfully");
        });
    } catch (error) {
      console.log("Error", error);
      if (error.response.data.error === "User with this email already exists") {
        toast.error("Email is already in use");
      }
    }
  };

  return (
    <>
      <div className="max-w-md  mx-auto bg-white p-8 rounded-md shadow-md mt-4 ">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              pattern="[A-Za-z]+"
              className="mt-1 p-2 border rounded-md w-full"
              onChange={handleInputChange}
            />
          </div>

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
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]+"
              className="mt-1 p-2 border rounded-md w-full"
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Gender
            </label>
            <div className="mt-2 space-x-4">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleInputChange}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleInputChange}
                />{" "}
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="others"
                  onChange={handleInputChange}
                />{" "}
                Others
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              How did you hear about this?
            </label>
            <div className="mt-2 space-x-4">
              <label>
                <input
                  type="checkbox"
                  name="source[]"
                  value="linkedin"
                  onChange={handleInputChange}
                />{" "}
                LinkedIn
              </label>
              <label>
                <input
                  type="checkbox"
                  name="source[]"
                  value="friends"
                  onChange={handleInputChange}
                />{" "}
                Friends
              </label>
              <label>
                <input
                  type="checkbox"
                  name="source[]"
                  value="job_portal"
                  onChange={handleInputChange}
                />{" "}
                Job Portal
              </label>
              <label>
                <input
                  type="checkbox"
                  name="source[]"
                  value="others"
                  onChange={handleInputChange}
                />{" "}
                Others
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-600"
            >
              City
            </label>
            <select
              id="city"
              name="city"
              className="mt-1 p-2 border rounded-md w-full"
            >
              <option value="mumbai">Mumbai</option>
              <option value="pune">Pune</option>
              <option value="ahmedabad">Ahmedabad</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-600"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="mt-1 p-2 border rounded-md w-full"
              list="state-list"
              onChange={handleInputChange}
            />
            <datalist id="state-list">
              <option value="Gujarat" />
              <option value="Maharashtra" />
              <option value="Karnataka" />
            </datalist>
          </div>
          <div className="mb-4">
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
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;

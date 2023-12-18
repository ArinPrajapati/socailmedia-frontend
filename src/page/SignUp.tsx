/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      // Make a POST request using Axios
      const response = await axios.post(
        "http://localhost:4000/user/create",
        formData
      );

      // Handle the response (you can add logic based on the response if needed)
      console.log(response.data);
      toast.success("Account created successfully! Please log in.");
    } catch (error: any) {
      // Handle errors
      toast.error(error.response.data.message);
      console.error("Error creating account:", error.message);
    }
  };
  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <div className="flex justify-center mb-6">
            <span className="inline-block bg-gray-200 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                />
              </svg>
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">
            Create a new account
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Enter your details to register.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                required
                placeholder="Enter Full Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                username
              </label>
              <input
                type="text"
                id="username"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                required
                placeholder="Enter Full Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                required
                placeholder="hello@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Password *
              </label>
              <input
                type="password"
                id="password"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                required
                placeholder="••••••••"
              />
              <p className="text-gray-600 text-xs mt-1">
                Must contain 1 uppercase letter, 1 number, min. 8 characters.
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Register
            </button>
            <p className="text-gray-600 text-xs text-center mt-4">
              Already have an account?
              <Link to="/login" className="text-blue-500 hover:underline">
                Log in
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

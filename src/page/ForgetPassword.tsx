import axios from "axios";
import { SetStateAction, useEffect, useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handleForgotPassword = async () => {
    try {
      setLoading(true);

      const response = await axios.post("http://localhost:4000/user/forgot-password", {
        email: email,
      })
      const data = await response.data;

      setMessage(data.message);
    } catch (error) {
      console.error("Error sending forgot password request:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log("ForgetPassword component rendered");
  }, []);

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
      <p className="text-gray-600 mb-4">
        Enter your email address to receive a password reset link.
      </p>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <button
        onClick={handleForgotPassword}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        {loading ? "Sending..." : "Send Reset Link"}
      </button>

      {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
    </div>
  );
};

export default ForgetPassword;

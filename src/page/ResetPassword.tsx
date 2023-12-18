/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const nav = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNewPasswordChange = (e: any) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPassword(e.target.value);
  };

  const handleResetPassword = async () => {
    try {
      setLoading(true);

      const token = window.location.pathname.split("/").pop();
      const response = await axios.post(
        `http://localhost:4000/user/reset-password/${token}`,
        { newPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      setMessage(data.message);
      nav("/login");
    } catch (error) {
      console.error("Error resetting password:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      <p className="text-gray-600 mb-4">
        Enter your new password to reset your password.
      </p>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          New Password:
        </label>
        <input
          className="border rounded w-full py-2 px-3"
          type="password"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Confirm Password:
        </label>
        <input
          className="border rounded w-full py-2 px-3"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        onClick={handleResetPassword}
        disabled={loading}
      >
        {loading ? "Resetting..." : "Reset Password"}
      </button>

      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default ResetPassword;

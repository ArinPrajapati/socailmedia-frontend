import { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useSnapshot } from "valtio";
import state from "../../helper/state";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const navigate = useNavigate();
  const snap = useSnapshot(state);
  const handleuser = async () => {
    const token = Cookies.get("token");

    const response = await axios.get(
      "http://localhost:4000/user/current",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data);
    const data = response.data;
    state.isAuth = true;
    state.at = "profile";
    localStorage.setItem("username", data.username);
    localStorage.setItem("userid", data._id);
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login");
    } else {
      try {
        handleuser();
      } catch (error) {
        console.error(error);
      }
    }
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-md shadow-md">
          <img
            src={`https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png`} // Replace with the actual URL or logic to fetch the user image
            alt="User"
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <h2 className="text-center text-lg font-semibold">
            {snap.username?.toUpperCase()}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Index;

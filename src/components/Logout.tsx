import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import state from "../helper/state";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userid");
    state.isAuth = false;
    navigate("/login");
  };
  return (
    <button onClick={handleLogout}>
      <img
        className="w-6 h-6"
        src="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/exit-enter-leave-door-out-256.png"
        alt=""
      />
    </button>
  );
};

export default Logout;

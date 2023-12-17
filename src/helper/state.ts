import { proxy } from "valtio";

const state = proxy({
  username: localStorage.getItem("username"),
  userid: localStorage.getItem("userid"),
  logutBtn: false,
  isAuth: false,
  at: "",
});

export default state;

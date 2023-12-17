import "./App.css";
import SideBar from "./components/SideBar";
import ForgetPassword from "./page/ForgetPassword";
import Login from "./page/Login";
import NotFound from "./page/NotFound";
import Index from "./page/Profile/Index";
import ResetPassword from "./page/ResetPassword";
import SignUp from "./page/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSnapshot } from "valtio";
import state from "./helper/state";
import PostPage from "./page/post/PostPage";
import Allpost from "./page/post/Allpost";
function App() {
  return (
    <Router>
      <>
        {useSnapshot(state).isAuth && <SideBar />}
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<Index />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/my-posts" element={<Allpost />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

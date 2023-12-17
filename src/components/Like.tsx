/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useSnapshot } from "valtio";
import state from "../helper/state";
import toast from "react-hot-toast";

const Like = (postId: any) => {
  const snap = useSnapshot(state);

  const handleLike = async () => {
    const post = postId;
    console.log(post);
    try {
      // Send a request to your server to like the post
      await axios.put(`https://socail-fiad.onrender.com/post/like/${postId.postId}`, {
        userId: snap.userid,
        userName: snap.username,
      });
      toast.success("Liked the post!");
    } catch (error: any) {
      console.error("Error liking the post:", error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <button onClick={handleLike}>
      <img
        className="w-6 h-6"
        src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-10-256.png"
        alt=""
      />
    </button>
  );
};

export default Like;

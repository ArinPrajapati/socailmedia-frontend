import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import Like from "../../components/Like";
import Comment from "../../components/Comment";
import PostComments from "../../components/PostComments";
import { snapshot, useSnapshot } from "valtio";
import state from "../../helper/state";

const Allpost = () => {
  const [posts, setPosts] = useState([]);
  const snap = useSnapshot(state);
  useEffect(() => {
    // Fetch posts from the server

    state.at = "allpost";
    state.isAuth = true;
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/post/user/" + snap.userid
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 p-4  mx-auto">
      {posts.map((post: any) => (
        <div
          key={post._id}
          className="bg-white p-4 rounded-md shadow-md w-1/2 mx-auto relative"
        >
          <div className="flex items-center mb-2">
            <div>
              <p className="font-bold">{post.username}</p>

              <p className="text-gray-500">{format(post.TimeStamp)}</p>
            </div>
          </div>

          {/* Post Image */}
          {post.postImg && (
            <img src={post.postImg} alt="Post" className="mb-4 rounded-md" />
          )}

          <div className="border-t pt-2">
            <PostComments postId={post._id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Allpost;

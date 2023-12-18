/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import Like from "../../components/Like";
import Comment from "../../components/Comment";
import PostComments from "../../components/PostComments";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the server
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://socail-fiad.onrender.com/post");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {posts.map((post: any) => (
        <div
          key={post._id}
          className="bg-white p-4 rounded-md shadow-md w-full relative"
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

          {/* Like and Comment Buttons */}
          <div className="flex items-center space-x-4 mb-4">
            <button className="flex items-center space-x-2">
              <Like postId={post._id} />
              <span>{post.likes.length}</span>
            </button>
            <button className="flex items-center space-x-2">
              <Comment postId={post._id} />
            </button>
          </div>

          {/* Dropdown for Comments */}
          <div className="border-t pt-2">
            <PostComments postId={post._id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;

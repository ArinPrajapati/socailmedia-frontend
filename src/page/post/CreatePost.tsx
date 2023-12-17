import React, { useEffect, useState } from "react";
import state from "../../helper/state";
import axios from "axios";
import toast from "react-hot-toast";
import { useSnapshot } from "valtio";

const CreatePost = () => {
  const snap = useSnapshot(state);
  const [img, setImg] = useState<Blob>();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    title: "",
    postMessage: "",
    userId: snap.userid,
    postImg: img,
    username: snap.username,
  });

  useEffect(() => {
    state.isAuth = true;
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imageFile = e.target.files[0];
      setImg(imageFile); // Store the image file directly in the state variable
    }
  };

  const createPost = async () => {
    if (img) {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("file", img);
        const imageUploadResponse = await axios.post(
          "https://socail-fiad.onrender.com/image/upload",
          formData
        );
        const imageUrl = imageUploadResponse.data.url;
        console.log(imageUrl);
        // Set the image URL to user.profileImg

        const updatedPost = {
          ...post,
          postImg: imageUrl,
        };
        setPost(updatedPost);

        // Sending user data to "http://localhost:3000/api/create"
        const response = await axios.post("https://socail-fiad.onrender.com/post/create", {
          title: post.title,
          postMessage: post.postMessage,
          userId: post.userId,
          postImg: imageUrl,
          username: post.username,
        });
        console.log(response.data);
        toast.success("Post Created");
        // navigate("/login");
        setLoading(false);
      } catch (error: any) {
        console.error("Error:", error);
        toast.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    } else {
      // Provide a message to the user if an image is not selected
      console.log("Please select an image before uploading.");
      toast.error("Please select the image");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <input
        type="text"
        placeholder="Title"
        className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <textarea
        placeholder="Message"
        className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
        onChange={(e) => setPost({ ...post, postMessage: e.target.value })}
      ></textarea>
      <input
        type="file"
        id="img"
        name="img"
        className="mb-4"
        onChange={handleImageChange}
      />
      <button
        onClick={createPost}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        {loading ? "Creating..." : "Create Post"}
      </button>
    </div>
  );
};

export default CreatePost;

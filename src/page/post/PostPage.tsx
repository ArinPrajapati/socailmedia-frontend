import React, { useEffect } from "react";
import CreatePost from "./CreatePost";
import PostList from "./PostList";
import state from "../../helper/state";

const PostPage = () => {
  useEffect(() => {
    state.at = "postpage";
  })
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-[30rem] overflow-auto">
      <CreatePost />
      <PostList />
    </div>
  );
};

export default PostPage;

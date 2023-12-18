/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const PostComments = (postId: any) => {
  const [post, setPost] = React.useState([]);
  const [show, setShow] = React.useState(true);
  const getPostComments = async () => {
    const response = await fetch(
      "http://localhost:4000/comment/cpost/" + postId.postId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setPost(data);
    console.log(data);
  };

  React.useEffect(() => {
    getPostComments();
  }, []);

  return (
    <div className="mb-2 transition-all" onClick={() => setShow(!show)}>
      Comment:
      {post.length > 0 ? (
        <div className={`${show ? "block" : "hidden"}  transition-all`}>
          {/* Map over comments and display them */}
          {post.map((comment: any) => (
            <div key={comment._id} className="mb-2">
              <p className="font-bold">by :{comment.username}</p>
              <p> {comment.commentContent}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default PostComments;

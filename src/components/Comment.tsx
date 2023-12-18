/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useSnapshot } from "valtio";
import axios from "axios";
import state from "../helper/state";

const Comment = (postId: any) => {
  const snap = useSnapshot(state);
  const [show, setShow] = React.useState(true);
  const [comment, setComment] = React.useState("");

  const handleComment = async () => {
    const res = await axios.post("http://localhost:4000/comment/create", {
      username: snap.username,
      commentContent: comment,
      postId: postId.postId,
      userId: snap.userid,
    });

    console.log(res);
  };
  return (
    <>
      <div onClick={() => setShow(!show)}>
        <img
          className="w-6 h-6"
          src="https://cdn4.iconfinder.com/data/icons/multimedia-112/32/Multimedia_Message_chat_comment_multimedia_ui_conversation-512.png"
          alt=""
        />
      </div>

      {show && (
        <div className="absolute w-[50%] bottom-17  left-[150px]  flex ">
          <input
            type="text"
            className="py-3 px-4 block w-full bg-gray-100 border border-gray-300 text-sm outline-none disabled:opacity-50 disabled:pointer-events-none "
            placeholder="Add Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            onClick={handleComment}
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold 
             border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none "
          >
            <img
              className="w-6 h-6"
              src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-42-256.png"
              alt=""
            />
          </button>
        </div>
      )}
    </>
  );
};

export default Comment;

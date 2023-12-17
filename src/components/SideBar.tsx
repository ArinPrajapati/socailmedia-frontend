import React from "react";
import { useSnapshot } from "valtio";
import state from "../helper/state";
import { Link } from "react-router-dom";
import Logout from "./Logout";
const SideBar = () => {
  const [show, setShow] = React.useState(false);
  const snap = useSnapshot(state);
  return (
    <div>
      <div
        className={`fixed top-2/4 -translate-y-2/4 left-1 min-h-[auto] min-w-[64px] z-[999999] `}
        onClick={() => setShow(!show)}
      >
        <nav className="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg  fixed top-2/4 -translate-y-2/4 left-0 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
          <Link
            to="/"
            className={`flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 
            ${
              snap.at == "profile"
                ? "bg-indigo-600 text-white"
                : "hover:bg-gray-100 text-indigo-600"
            }  `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 shrink-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            <small className="text-center text-xs font-medium"> Profile </small>
          </Link>

          <Link
            to="/my-posts"
            className={`flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 ${
              snap.at == "allpost"
                ? "bg-indigo-600 text-white"
                : "hover:bg-gray-100"
            } `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 shrink-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>

            <small className="text-center text-xs font-medium">My Post</small>
          </Link>

          <Link
            to="/post"
            className={`flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 ${
              snap.at == "postpage"
                ? "bg-indigo-600 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <svg
              height="1657.973px"
              version="1.1"
              viewBox="0 0 1692 1657.973"
              width="1692px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="comment">
                <g>
                  <path d="M1216.598,1657.973c-15.035,0-29.926-4.822-41.984-14.746l-439.527-361.254H158.332    C71.515,1281.973,0,1209.012,0,1120.074V160.168C0,71.627,71.515,0.973,158.332,0.973h1374.836    c87.743,0,158.832,70.655,158.832,159.195v959.909c0,88.938-71.089,161.896-158.832,161.896H1282v309.93    c0,25.561-14.415,48.826-37.528,59.744C1235.479,1655.892,1226.173,1657.973,1216.598,1657.973z M158.332,132.973    c-13.953,0-25.332,11.52-25.332,27.195v959.906c0,15.805,11.615,29.898,25.332,29.898H758.77c15.311,0,29.89,4.95,41.715,14.674    L1150,1451.998v-236.699c0-36.49,30.096-65.326,66.586-65.326h316.582c14.123,0,26.832-14.639,26.832-29.896V160.168    c0-15.146-12.457-27.195-26.832-27.195H158.332z" />
                </g>
              </g>
              <g id="Layer_1" />
            </svg>

            <small className="text-center text-xs font-medium">Post</small>
          </Link>
          <button
            className={`flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 `}
          >
            <Logout />
            <small className="text-center text-xs font-medium">Logout</small>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;

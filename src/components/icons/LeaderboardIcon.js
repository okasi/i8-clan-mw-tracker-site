import * as React from "react";

function LeaderBoardIcon(props) {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      preserveAspectRatio="none" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26.25 13.75H22.5v7.5H20V8.75c0-1.379-1.121-2.5-2.5-2.5h-5a2.502 2.502 0 00-2.5 2.5v12.5H7.5v-10H3.75a2.502 2.502 0 00-2.5 2.5v7.5c0 1.379 1.121 2.5 2.5 2.5h22.5c1.379 0 2.5-1.121 2.5-2.5v-5c0-1.379-1.121-2.5-2.5-2.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default LeaderBoardIcon;
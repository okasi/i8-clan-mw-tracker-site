import * as React from "react";

function ComputerIcon(props) {
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
        d="M6 4c-1.093 0-2 .907-2 2v13c0 .594.273 1.128.693 1.496C4.272 20.863 4 21.397 4 22v2a2 2 0 002 2h18a2 2 0 002-2v-2c0-.603-.272-1.137-.693-1.504.42-.368.693-.902.693-1.496V6c0-1.093-.907-2-2-2H6zm0 2h18v13H6V6zm1 16h10a1 1 0 010 2H7a1 1 0 010-2zm16 0a1 1 0 110 2 1 1 0 010-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ComputerIcon;
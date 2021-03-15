import * as React from "react";

function UserIcon(props) {
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
        d="M15 3a6 6 0 00-6 6v1a6 6 0 1012 0V9a6 6 0 00-6-6zm-.002 16c-4.006 0-9.146 2.167-10.625 4.09C3.459 24.279 4.329 26 5.828 26H24.17c1.499 0 2.369-1.721 1.455-2.91C24.146 21.168 19.004 19 14.998 19z"
        fill="currentColor"
      />
    </svg>
  );
}

export default UserIcon;
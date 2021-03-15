import * as React from "react";

function AimIcon(props) {
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
        d="M13.75 1.25v2.573a11.18 11.18 0 00-9.927 9.927H1.25v2.5h2.573a11.18 11.18 0 009.927 9.927v2.573h2.5v-2.573a11.18 11.18 0 009.927-9.927h2.573v-2.5h-2.573a11.18 11.18 0 00-9.927-9.927V1.25h-2.5zm1.25 5A8.696 8.696 0 0123.75 15 8.696 8.696 0 0115 23.75 8.696 8.696 0 016.25 15 8.696 8.696 0 0115 6.25zm0 5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default AimIcon;
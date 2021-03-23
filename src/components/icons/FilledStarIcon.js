import * as React from "react";

function FilledStarIcon(props) {
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
        d="M15 22.346l8.539 5.154-2.267-9.712 7.544-6.536-9.933-.842L15 1.25l-3.883 9.16-9.933.842 7.543 6.536L6.461 27.5 15 22.346z"
        fill="currentColor"
      />
    </svg>
  );
}

export default FilledStarIcon;
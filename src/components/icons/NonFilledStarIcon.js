import * as React from "react";

function NonFilledStarIcon(props) {
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
        d="M28.8 11.276l-10.338-.281L15 1.25l-3.463 9.745-10.337.281 8.199 6.304L6.47 27.5 15 21.651l8.529 5.849-2.928-9.919 8.199-6.305zM15 18.62l-4.14 2.839 1.421-4.814-3.979-3.06 5.018-.136L15 8.717l1.68 4.73 5.018.137-3.98 3.06 1.422 4.814L15 18.62z"
        fill="currentColor"
      />
    </svg>
  );
}

export default NonFilledStarIcon;
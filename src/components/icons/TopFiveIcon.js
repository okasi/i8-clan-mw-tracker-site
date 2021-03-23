import * as React from "react";

function TopFiveIcon(props) {
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
        d="M24 4H6a2 2 0 00-2 2v18a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2zm-9.051 16.117c-2.146 0-3.609-1.292-3.671-3.056h1.907c.116.82.841 1.367 1.777 1.367 1.06 0 1.791-.711 1.791-1.784 0-1.087-.738-1.812-1.784-1.812-.766 0-1.347.335-1.688.889h-1.846L11.927 10h6.2v1.716h-4.601l-.219 2.536h.123c.417-.602 1.114-.964 2.092-.964 1.873 0 3.199 1.374 3.199 3.309.001 2.091-1.51 3.52-3.772 3.52z"
        fill="currentColor"
      />
    </svg>
  );
}

export default TopFiveIcon;
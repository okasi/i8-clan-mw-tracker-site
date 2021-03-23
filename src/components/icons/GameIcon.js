import * as React from "react";

function GameIcon(props) {
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
        d="M15 6c-4.067 0-9.598 1.06-9.604 1.06h-.001a3 3 0 00-2.34 2.385l-.004.004-1.967 10.73.002.003A4 4 0 005 25c1.186 0 2.24-.527 2.973-1.348l.013.008L9.5 22h11l1.514 1.66.013-.008A3.973 3.973 0 0025 25a4 4 0 003.914-4.818l.002-.002-1.967-10.73-.004-.005a2.999 2.999 0 00-2.341-2.384h-.002C24.597 7.059 19.067 6 15 6zm-7 6a1 1 0 011 1v1h1a1 1 0 010 2H9v1a1 1 0 01-2 0v-1H6a1 1 0 010-2h1v-1a1 1 0 011-1zm14 0a1 1 0 110 2 1 1 0 010-2zm-2 2a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zm-2 2a1 1 0 110 2 1 1 0 010-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default GameIcon;
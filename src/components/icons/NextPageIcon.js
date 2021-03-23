import * as React from "react";

function NextPageIcon(props) {
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
        d="M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm4.707 12.707l-6 6a.997.997 0 01-1.414 0 .999.999 0 010-1.414L17.586 15l-5.293-5.293a.999.999 0 111.414-1.414l6 6a.999.999 0 010 1.414z"
        fill="currentColor"
      />
    </svg>
  );
}

export default NextPageIcon;
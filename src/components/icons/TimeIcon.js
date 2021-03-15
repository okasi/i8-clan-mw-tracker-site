import * as React from "react";

function TimeIcon(props) {
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
        d="M12.5 1.25a1.25 1.25 0 000 2.5h5a1.25 1.25 0 000-2.5h-5zm11.243 2.756a1.252 1.252 0 00-.706 2.202l1.78 1.51a1.252 1.252 0 001.616-1.91L24.653 4.3a1.247 1.247 0 00-.91-.293zM15 5C8.797 5 3.75 10.047 3.75 16.25S8.797 27.5 15 27.5s11.25-5.047 11.25-11.25S21.203 5 15 5zm0 3.75c.69 0 1.25.56 1.25 1.25v6.25a1.25 1.25 0 01-2.5 0V10c0-.69.56-1.25 1.25-1.25z"
        fill="currentColor"
      />
    </svg>
  );
}

export default TimeIcon;
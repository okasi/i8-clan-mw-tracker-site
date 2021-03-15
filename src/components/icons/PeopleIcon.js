import * as React from "react";

function PeopleIcon(props) {
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
        d="M15 5a4.375 4.375 0 100 8.75A4.375 4.375 0 0015 5zM5.625 8.75a3.125 3.125 0 100 6.25 3.125 3.125 0 000-6.25zm18.75 0a3.125 3.125 0 100 6.25 3.125 3.125 0 000-6.25zM15 16.25c-2.92 0-8.75 1.466-8.75 4.375V25h17.5v-4.375c0-2.909-5.83-4.375-8.75-4.375zM4.873 17.566C2.897 17.87 0 19.236 0 20.88V25h3.75v-4.375c0-1.201.432-2.21 1.123-3.06zm20.254 0c.691.85 1.123 1.858 1.123 3.059V25H30v-4.119c0-1.645-2.897-3.01-4.873-3.315z"
        fill="currentColor"
      />
    </svg>
  );
}

export default PeopleIcon;
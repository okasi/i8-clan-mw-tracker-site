
import * as React from "react";

function TopTenIcon(props) {
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
        d="M6 4a2 2 0 00-2 2v18a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2H6zm12.277 5.203c3.024 0 3.938 2.797 3.938 5.719 0 2.83-.825 5.875-3.986 5.875-3.1 0-3.979-2.867-3.979-5.799 0-2.906.96-5.795 4.027-5.795zm-7.77.158h1.241v11.23h-1.701v-9.208c-.547.37-1.653.784-2.262.883V10.94c.9-.224 1.98-.855 2.723-1.58zM18.29 10.6c-1.856 0-2.281 1.942-2.281 4.394 0 2.114.342 4.406 2.236 4.406 1.9 0 2.219-2.173 2.219-4.47-.001-2.157-.35-4.33-2.174-4.33z"
        fill="currentColor"
      />
    </svg>
  );
}

export default TopTenIcon;
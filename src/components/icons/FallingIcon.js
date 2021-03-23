import * as React from "react";

function FallingIcon(props) {
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
        d="M15 4a3 3 0 100 6 3 3 0 000-6zm-12.979.988a1 1 0 00-.87 1.541l3.263 5.242a1 1 0 00.318.317L9.4 15.582s.6 2.673.6 3.486c0 1.298-1.779 5.021-1.812 5.092l-.018.04a2 2 0 003.387 2.055L15 21.999l3.42 4.225A2 2 0 0022 25a2 2 0 00-.17-.8S20 20.377 20 19.067c0-.813.6-3.486.6-3.486l4.652-3.482a1 1 0 00.334-.329L28.85 6.53a1.001 1.001 0 00-1.666-1.11l-3.915 4.524L18.413 12h-6.824L6.732 9.945l-3.93-4.543a1 1 0 00-.78-.414z"
        fill="currentColor"
      />
    </svg>
  );
}

export default FallingIcon;
import * as React from "react";

function SemiFilledStarIcon(props) {
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
        opacity={0.3}
        d="M15 20.032l-5.406 3.264 1.435-6.15-4.779-4.14 6.286-.534L15 6.66l2.464 5.814 6.286.533-4.779 4.14 1.435 6.15L15 20.032z"
        fill="currentColor"
      />
      <path
        d="M28.816 11.252l-9.933-.842L15 1.25l-3.883 9.16-9.933.842 7.543 6.536L6.461 27.5 15 22.346l8.539 5.154-2.267-9.712 7.544-6.536zM15 19.426l-4.758 2.872 1.263-5.413L7.3 13.242l5.531-.468L15 7.656l2.169 5.118 5.531.469-4.205 3.643 1.262 5.413L15 19.426z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SemiFilledStarIcon;
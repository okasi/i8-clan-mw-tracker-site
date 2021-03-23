import * as React from "react";

function HourglassIcon(props) {
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
        d="M7.984 2.986A1 1 0 007.84 3H6a1 1 0 100 2h1v2c0 4.612 3.112 7.053 4.465 8C10.112 15.947 7 18.388 7 23v2H6a1 1 0 100 2h1.832a.997.997 0 00.326 0h13.674a.997.997 0 00.326 0H24a1 1 0 100-2h-1v-2c0-4.612-3.112-7.053-4.465-8C19.888 14.053 23 11.612 23 7V5h1a1 1 0 100-2h-1.846a1.001 1.001 0 00-.314 0H8.154a1 1 0 00-.17-.014zM9.09 8h11.82c-.608 3.759-4.424 6.143-4.424 6.143a1 1 0 000 1.714S20.302 18.241 20.91 22h-2.053A3.99 3.99 0 0015 19a3.99 3.99 0 00-3.857 3H9.09c.608-3.759 4.424-6.143 4.424-6.143a1 1 0 000-1.714S9.698 11.759 9.09 8zm3.41 2a2.5 2.5 0 105 0h-5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default HourglassIcon;
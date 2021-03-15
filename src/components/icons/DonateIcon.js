import * as React from "react";

function DonateIcon(props) {
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
        d="M17.656 1.101L8.828 4.487 5.127 9.094a6.252 6.252 0 00-1.377 3.914V17.5c0 1.631 1.055 3.008 2.512 3.523-.002.076-.012.15-.012.227 0 4.136 3.364 7.5 7.5 7.5s7.5-3.364 7.5-7.5c0-.752-.118-1.475-.325-2.16l.882-.633c.515-.37 2.923-2.545 3.11-3.262.188-.716 1.333-3.835 1.333-7.695v-.669l-8.594-5.73zM14.526 10a2.73 2.73 0 011.392.354c.736.413 1.44 1.341 1.582 2.146v2.017l-.154.153-1.897 1.897-.822.823a2.994 2.994 0 000 4.233l1.257 1.087 2.82-2.026c.021.186.046.373.046.566 0 2.758-2.242 5-5 5s-5-2.242-5-5c0-2.19 1.425-4.035 3.389-4.71.207-.323.436-.636.72-.92l1.811-1.809a7.736 7.736 0 00-.92-.061 7.46 7.46 0 00-5 1.926v-1.772c.643-.585 3.708-3.071 4.402-3.496.428-.262.9-.399 1.374-.408z"
        fill="currentColor"
      />
    </svg>
  );
}

export default DonateIcon;
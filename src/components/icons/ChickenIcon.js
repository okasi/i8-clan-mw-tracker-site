import * as React from "react";

function ChickenIcon(props) {
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
        d="M19 2a2 2 0 00-1.816 1.166 1.5 1.5 0 10-.627 2.832A3.952 3.952 0 0016 8c0 4.014-1.705 6.979-7.525 6.979-.663-2.021-2.116-3.69-2.186-3.768a1 1 0 00-1.502 1.32c.013.013.895 1.033 1.488 2.317-1.684-1.047-3.236-.892-3.324-.885a.995.995 0 00-.879 1.092c.054.546.553.946 1.088.896.08-.007 1.833-.136 3.297 1.723.38.89 2.274 5.698 6.414 6.996-.037.032-.082.065-.115.096-.365.338-.592.683-.592.683a1 1 0 001.038 1.532 1 1 0 00.634-.43s.102-.155.277-.317c.175-.162.363-.234.387-.234 1.18 0 1.758.67 1.758.67a1 1 0 101.484-1.34s-.251-.238-.635-.502C21.046 24.17 23 21.581 23 17.736 23 14.687 21 12 21 12s1.518-.632 2.393-2H25c-.133-.959-.538-1.599-1.004-2.045a3.987 3.987 0 00-1.162-2.775A1.5 1.5 0 0023 4.5a1.5 1.5 0 00-2.186-1.334A2 2 0 0019 2zm2 5a1 1 0 110 2 1 1 0 010-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ChickenIcon;
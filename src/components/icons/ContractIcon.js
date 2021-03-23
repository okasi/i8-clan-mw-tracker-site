import * as React from "react";

function ContractIcon(props) {
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
        d="M9 3C6.25 3 4 5.25 4 8v1a1 1 0 001 1h11a1 1 0 001-1V8c0-1.668 1.331-3 3-3s3 1.332 3 3v14h-1c0 .702-.128 1.374-.35 2h2.182A1 1 0 0025 23V8c0-2.75-2.25-5-5-5H9zm-2 9v11a1 1 0 001 1h2.35a5.971 5.971 0 01-.35-2H9V12H7zm6 2a1 1 0 100 2h6a1 1 0 100-2h-6zm3 4c-2.197 0-4 1.803-4 4 0 1 .386 1.907 1 2.611V30l3-2 3 2v-5.389c.614-.704 1-1.61 1-2.611 0-2.197-1.803-4-4-4zm0 2c1.116 0 2 .884 2 2s-.884 2-2 2-2-.884-2-2 .884-2 2-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ContractIcon;
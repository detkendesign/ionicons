import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const CodeWorkingSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
  ({ width, size, height, ...props }, ref) => {
    return (
      <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? size}
        height={height ?? size}
        ref={ref}
        {...props}
      >
        <circle
          cx="256"
          cy="256"
          r="26"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit="10"
          strokeWidth="10"
        />
        <circle
          cx="346"
          cy="256"
          r="26"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit="10"
          strokeWidth="10"
        />
        <circle
          cx="166"
          cy="256"
          r="26"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit="10"
          strokeWidth="10"
        />
        <path
          d="M160 368L32 256l128-112M352 368l128-112-128-112"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit="10"
          strokeWidth="42"
        />
      </svg>
    );
  },
);

CodeWorkingSharp.displayName = "CodeWorkingSharp";

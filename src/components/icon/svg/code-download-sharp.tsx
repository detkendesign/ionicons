import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const CodeDownloadSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path
          d="M160 368L32 256l128-112M352 368l128-112-128-112M192 288.1l64 63.9 64-63.9M256 160v176.03"
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

CodeDownloadSharp.displayName = "CodeDownloadSharp";

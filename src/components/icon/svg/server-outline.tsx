import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ServerOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
  ({ width, size, height, ...props }, ref) => {
    return (
      <svg
        fill="none"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? size}
        height={height ?? size}
        ref={ref}
        {...props}
      >
        <ellipse
          cx="256"
          cy="112"
          rx="176"
          ry="80"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M432 112v288c0 44.183-78.798 80-176 80S80 444.183 80 400V112"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M432 256c0 44.183-78.798 80-176 80S80 300.183 80 256"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

ServerOutline.displayName = "ServerOutline";

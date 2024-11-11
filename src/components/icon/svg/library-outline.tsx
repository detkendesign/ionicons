import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const LibraryOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <rect
          height="368"
          width="64"
          fill="none"
          rx="16"
          ry="16"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="32"
          y="96"
        />
        <rect
          height="304"
          width="128"
          fill="none"
          rx="16"
          ry="16"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="112"
          y="160"
        />
        <rect
          height="416"
          width="96"
          fill="none"
          rx="16"
          ry="16"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="256"
          y="48"
        />
        <path
          d="M112 224h128M112 400h128"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M422.46 96.11l-40.4 4.25c-11.12 1.17-19.18 11.57-17.93 23.1l34.92 321.59c1.26 11.53 11.37 20 22.49 18.84l40.4-4.25c11.12-1.17 19.18-11.57 17.93-23.1L445 115c-1.31-11.58-11.42-20.06-22.54-18.89z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

LibraryOutline.displayName = "LibraryOutline";

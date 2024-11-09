import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const AlbumsOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          height="256"
          width="384"
          fill="none"
          rx="28.87"
          ry="28.87"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="64"
          y="176"
        />
        <path
          d="M144 80h224M112 128h288"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

AlbumsOutline.displayName = "AlbumsOutline";

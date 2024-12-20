import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ImagesOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M432 112V96a48.14 48.14 0 00-48-48H64a48.14 48.14 0 00-48 48v256a48.14 48.14 0 0048 48h16"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M342.15 372.17L255 285.78a30.93 30.93 0 00-42.18-1.21L96 387.64M265.23 464l118.59-117.73a31 31 0 0141.46-1.87L496 402.91"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          height="336"
          width="400"
          fill="none"
          rx="45.99"
          ry="45.99"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="96"
          y="128"
        />
        <ellipse
          cx="372.92"
          cy="219.64"
          fill="none"
          rx="30.77"
          ry="30.55"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

ImagesOutline.displayName = "ImagesOutline";

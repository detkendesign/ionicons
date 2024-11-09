import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const KeypadOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          cy="448"
          fill="none"
          r="32"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <circle
          cx="256"
          cy="320"
          fill="none"
          r="32"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <circle
          cx="256"
          cy="64"
          fill="none"
          r="32"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <circle
          cx="384"
          cy="320"
          fill="none"
          r="32"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <circle
          cx="384"
          cy="192"
          fill="none"
          r="32"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <circle
          cx="384"
          cy="64"
          fill="none"
          r="32"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <circle
          cx="128"
          cy="320"
          fill="none"
          r="32"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <circle
          cx="128"
          cy="192"
          fill="none"
          r="32"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <circle
          cx="128"
          cy="64"
          fill="none"
          r="32"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path
          d="M288 192a32 32 0 11-32-32 32 32 0 0132 32z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

KeypadOutline.displayName = "KeypadOutline";

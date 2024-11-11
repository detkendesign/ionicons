import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const NuclearOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          fill="none"
          r="192"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <circle
          cx="256"
          cy="256"
          fill="none"
          r="64"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path
          d="M224 192L171 85M288 192l53-107M327.55 255.81l119.41.13M299.09 313.13l72.25 95.06M184.45 255.81l-119.41.13M212.91 313.13l-72.25 95.06"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

NuclearOutline.displayName = "NuclearOutline";

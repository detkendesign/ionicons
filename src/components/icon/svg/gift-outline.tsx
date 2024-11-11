import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const GiftOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M256 104v56h56a56 56 0 10-56-56zM256 104v56h-56a56 56 0 1156-56z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path
          d="M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272M256 160v304"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          height="112"
          width="384"
          fill="none"
          rx="32"
          ry="32"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          x="64"
          y="160"
        />
      </svg>
    );
  },
);

GiftOutline.displayName = "GiftOutline";

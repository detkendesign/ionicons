import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const SyncCircleOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path
          d="M351.82 271.87v-16A96.15 96.15 0 00184.09 192m-24.2 48.17v16A96.22 96.22 0 00327.81 320"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M135.87 256l23.59-23.6 24.67 23.6M376.13 256l-23.59 23.6-24.67-23.6"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

SyncCircleOutline.displayName = "SyncCircleOutline";

import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const DocumentLockOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M288 304v-18c0-16.63-14.26-30-32-30s-32 13.37-32 30v18"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path d="M304 416h-96a32 32 0 01-32-32v-48a32 32 0 0132-32h96a32 32 0 0132 32v48a32 32 0 01-32 32z" />
        <path
          d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M256 50.88V176a32 32 0 0032 32h125.12"
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

DocumentLockOutline.displayName = "DocumentLockOutline";

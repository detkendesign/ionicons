import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ClipboardOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M336 64h32a48 48 0 0148 48v320a48 48 0 01-48 48H144a48 48 0 01-48-48V112a48 48 0 0148-48h32"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          height="64"
          width="160"
          fill="none"
          rx="26.13"
          ry="26.13"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="176"
          y="32"
        />
      </svg>
    );
  },
);

ClipboardOutline.displayName = "ClipboardOutline";

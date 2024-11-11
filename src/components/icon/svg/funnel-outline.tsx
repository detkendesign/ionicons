import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const FunnelOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M35.4 87.12l168.65 196.44A16.07 16.07 0 01208 294v119.32a7.93 7.93 0 005.39 7.59l80.15 26.67A7.94 7.94 0 00304 440V294a16.07 16.07 0 014-10.44L476.6 87.12A14 14 0 00466 64H46.05A14 14 0 0035.4 87.12z"
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

FunnelOutline.displayName = "FunnelOutline";

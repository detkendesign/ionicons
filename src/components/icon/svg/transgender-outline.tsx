import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const TransgenderOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          r="128"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path
          d="M448 352l-96 96M176 80l-95.98 95.98M464 128V48h-80M48 128V48h80M464 48L346.5 165.5M48 48l117.49 117.49M464 464L346.65 346.37"
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

TransgenderOutline.displayName = "TransgenderOutline";

import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ColorFilterOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          cy="184"
          fill="none"
          r="120"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle
          cx="344"
          cy="328"
          fill="none"
          r="120"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <circle
          cx="168"
          cy="328"
          fill="none"
          r="120"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

ColorFilterOutline.displayName = "ColorFilterOutline";

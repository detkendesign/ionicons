import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ChevronBackSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M328 112L184 256l144 144"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit="10"
          strokeWidth="48"
        />
      </svg>
    );
  },
);

ChevronBackSharp.displayName = "ChevronBackSharp";

import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ArrowForwardSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M268 112l144 144-144 144M392 256H100"
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

ArrowForwardSharp.displayName = "ArrowForwardSharp";

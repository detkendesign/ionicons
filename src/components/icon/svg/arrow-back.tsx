import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ArrowBack = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M244 400L100 256l144-144M120 256h292"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
        />
      </svg>
    );
  },
);

ArrowBack.displayName = "ArrowBack";

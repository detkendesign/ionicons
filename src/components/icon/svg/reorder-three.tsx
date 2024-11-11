import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ReorderThree = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M102 256h308M102 176h308M102 336h308"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="44"
        />
      </svg>
    );
  },
);

ReorderThree.displayName = "ReorderThree";

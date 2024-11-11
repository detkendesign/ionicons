import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ReorderFourSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M102 304h308M102 208h308M102 112h308M102 400h308"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth="44"
        />
      </svg>
    );
  },
);

ReorderFourSharp.displayName = "ReorderFourSharp";

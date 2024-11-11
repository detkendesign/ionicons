import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const Scan = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M342 444h46a56 56 0 0056-56v-46M444 170v-46a56 56 0 00-56-56h-46M170 444h-46a56 56 0 01-56-56v-46M68 170v-46a56 56 0 0156-56h46"
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

Scan.displayName = "Scan";

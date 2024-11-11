import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ShuffleSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h128l60-92"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path
          d="M64 160h128l128 192h96M416 160h-96l-32 48"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

ShuffleSharp.displayName = "ShuffleSharp";

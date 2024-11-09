import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const CheckmarkSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M416 128L192 384l-96-96"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit="10"
          strokeWidth="44"
        />
      </svg>
    );
  },
);

CheckmarkSharp.displayName = "CheckmarkSharp";

import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const Menu = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M88 152h336M88 256h336M88 360h336"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="48"
        />
      </svg>
    );
  },
);

Menu.displayName = "Menu";

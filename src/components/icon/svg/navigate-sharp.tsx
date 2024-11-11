import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const NavigateSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M480 32L32 240h240v240L480 32z" />
      </svg>
    );
  },
);

NavigateSharp.displayName = "NavigateSharp";

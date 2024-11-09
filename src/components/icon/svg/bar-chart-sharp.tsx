import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const BarChartSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M496 496H16V16h32v448h448v32z" />
        <path d="M192 432H80V208h112zM336 432H224V160h112zM479.64 432h-112V96h112z" />
      </svg>
    );
  },
);

BarChartSharp.displayName = "BarChartSharp";

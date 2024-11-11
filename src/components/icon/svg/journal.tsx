import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const Journal = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M290 32H144a64.07 64.07 0 00-64 64v320a64.07 64.07 0 0064 64h146zM368 32h-18v448h18a64.07 64.07 0 0064-64V96a64.07 64.07 0 00-64-64z" />
      </svg>
    );
  },
);

Journal.displayName = "Journal";

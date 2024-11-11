import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const TimeSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M256 48C141.13 48 48 141.13 48 256c0 114.69 93.32 208 208 208 114.86 0 208-93.14 208-208 0-114.69-93.31-208-208-208zm108 240H244a4 4 0 01-4-4V116a4 4 0 014-4h24a4 4 0 014 4v140h92a4 4 0 014 4v24a4 4 0 01-4 4z" />
      </svg>
    );
  },
);

TimeSharp.displayName = "TimeSharp";

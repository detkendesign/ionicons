import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const TvSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M488 384H24a8 8 0 01-8-8V88a8 8 0 018-8h464a8 8 0 018 8v288a8 8 0 01-8 8z" />
        <rect height="32" width="288" rx="4" ry="4" x="112" y="400" />
      </svg>
    );
  },
);

TvSharp.displayName = "TvSharp";

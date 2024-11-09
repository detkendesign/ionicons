import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PauseSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M224 432h-80V80h80zM368 432h-80V80h80z" />
      </svg>
    );
  },
);

PauseSharp.displayName = "PauseSharp";

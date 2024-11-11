import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const KeypadSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <rect height="96" width="96" rx="8" ry="8" x="80" y="16" />
        <rect height="96" width="96" rx="8" ry="8" x="208" y="16" />
        <rect height="96" width="96" rx="8" ry="8" x="336" y="16" />
        <rect height="96" width="96" rx="8" ry="8" x="80" y="144" />
        <rect height="96" width="96" rx="8" ry="8" x="208" y="144" />
        <rect height="96" width="96" rx="8" ry="8" x="336" y="144" />
        <rect height="96" width="96" rx="8" ry="8" x="80" y="272" />
        <rect height="96" width="96" rx="8" ry="8" x="208" y="272" />
        <rect height="96" width="96" rx="8" ry="8" x="208" y="400" />
        <rect height="96" width="96" rx="8" ry="8" x="336" y="272" />
      </svg>
    );
  },
);

KeypadSharp.displayName = "KeypadSharp";

import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const FlashSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M432 208H288l32-192L80 304h144l-32 192z" />
      </svg>
    );
  },
);

FlashSharp.displayName = "FlashSharp";

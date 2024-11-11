import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const FileTrayStackedSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M448 16H64L32 176v144h448V176zm-12 160H320a64 64 0 01-128 0H76L98 58h316zM320 352a64 64 0 01-128 0H32v144h448V352z" />
      </svg>
    );
  },
);

FileTrayStackedSharp.displayName = "FileTrayStackedSharp";

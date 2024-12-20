import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PricetagsSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M288 16L0 304l176 176 288-288V16zm80 128a32 32 0 1132-32 32 32 0 01-32 32z" />
        <path d="M480 64v144L216.9 471.1 242 496l270-272V64h-32z" />
      </svg>
    );
  },
);

PricetagsSharp.displayName = "PricetagsSharp";

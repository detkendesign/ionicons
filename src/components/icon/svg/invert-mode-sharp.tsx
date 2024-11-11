import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const InvertModeSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM256 432v-96a80 80 0 010-160V80c97.05 0 176 79 176 176s-78.95 176-176 176z" />
        <path d="M336 256a80 80 0 00-80-80v160a80 80 0 0080-80z" />
      </svg>
    );
  },
);

InvertModeSharp.displayName = "InvertModeSharp";

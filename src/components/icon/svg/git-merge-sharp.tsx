import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const GitMergeSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M384 224a63.66 63.66 0 00-37.95 12.5L160 153.36v-2a64 64 0 10-64 0v209.25a64 64 0 1064 0V223.46l160.41 71.69A64 64 0 10384 224zM128 64a32 32 0 11-32 32 32 32 0 0132-32zm0 384a32 32 0 1132-32 32 32 0 01-32 32zm256-128a32 32 0 1132-32 32 32 0 01-32 32z" />
      </svg>
    );
  },
);

GitMergeSharp.displayName = "GitMergeSharp";
import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const GitPullRequestSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M192 96a64 64 0 10-97 54.81v209.8a64 64 0 1064 0V152a64.06 64.06 0 0033-56zm-64-32a32 32 0 11-32 32 32 32 0 0132-32zm-1 384a32 32 0 1132-32 32 32 0 01-32 32zM416 360.61V156a92.1 92.1 0 00-92-92h-35V9.93L201.14 96 289 182.07V128h35a28 28 0 0128 28v204.61a64 64 0 1064 0zM384 448a32 32 0 1132-32 32 32 0 01-32 32z" />
      </svg>
    );
  },
);

GitPullRequestSharp.displayName = "GitPullRequestSharp";
import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const GitCompare = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M218.31 340.69A16 16 0 00191 352v32h-20a28 28 0 01-28-28V152a64 64 0 10-64-1.16V356a92.1 92.1 0 0092 92h20v32a16 16 0 0027.31 11.31l64-64a16 16 0 000-22.62zM112 64a32 32 0 11-32 32 32 32 0 0132-32zM432 360.61V156a92.1 92.1 0 00-92-92h-20V32a16 16 0 00-27.31-11.31l-64 64a16 16 0 000 22.62l64 64A16 16 0 00320 160v-32h20a28 28 0 0128 28v204.61a64 64 0 1064 0zM400 448a32 32 0 1132-32 32 32 0 01-32 32z" />
      </svg>
    );
  },
);

GitCompare.displayName = "GitCompare";
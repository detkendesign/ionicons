import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const GitNetworkSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M384 32a64 64 0 00-57.67 91.73l-70.83 80.82-70.19-80.1A64 64 0 10128 160c1.1 0 2.2 0 3.29-.08L224 265.7v94.91a64 64 0 1064 0v-96.05l91.78-104.71c1.39.09 2.8.15 4.22.15a64 64 0 000-128zM96 96a32 32 0 1132 32 32 32 0 01-32-32zm160 352a32 32 0 1132-32 32 32 0 01-32 32zm128-320a32 32 0 1132-32 32 32 0 01-32 32z" />
      </svg>
    );
  },
);

GitNetworkSharp.displayName = "GitNetworkSharp";
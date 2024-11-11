import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const AppsSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <rect height="112" width="112" rx="8" ry="8" x="48" y="48" />
        <rect height="112" width="112" rx="8" ry="8" x="200" y="48" />
        <rect height="112" width="112" rx="8" ry="8" x="352" y="48" />
        <rect height="112" width="112" rx="8" ry="8" x="48" y="200" />
        <rect height="112" width="112" rx="8" ry="8" x="200" y="200" />
        <rect height="112" width="112" rx="8" ry="8" x="352" y="200" />
        <rect height="112" width="112" rx="8" ry="8" x="48" y="352" />
        <rect height="112" width="112" rx="8" ry="8" x="200" y="352" />
        <rect height="112" width="112" rx="8" ry="8" x="352" y="352" />
      </svg>
    );
  },
);

AppsSharp.displayName = "AppsSharp";

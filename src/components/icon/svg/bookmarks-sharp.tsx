import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const BookmarksSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M112 0v48h304v368l48 32V0H112z" />
        <path d="M48 80v432l168-124 168 124V80H48z" />
      </svg>
    );
  },
);

BookmarksSharp.displayName = "BookmarksSharp";

import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const BookmarkSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M416 480L256 357.41 96 480V32h320z" />
      </svg>
    );
  },
);

BookmarkSharp.displayName = "BookmarkSharp";

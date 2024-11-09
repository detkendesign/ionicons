import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PaperPlaneSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M496 16L15.88 208 195 289 448 64 223 317l81 179L496 16z" />
      </svg>
    );
  },
);

PaperPlaneSharp.displayName = "PaperPlaneSharp";

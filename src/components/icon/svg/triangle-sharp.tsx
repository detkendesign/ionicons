import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const TriangleSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M256 32L20 464h472L256 32z" />
      </svg>
    );
  },
);

TriangleSharp.displayName = "TriangleSharp";

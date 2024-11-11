import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const CardSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M32 416a16 16 0 0016 16h416a16 16 0 0016-16V222H32zm66-138a8 8 0 018-8h92a8 8 0 018 8v64a8 8 0 01-8 8h-92a8 8 0 01-8-8zM464 80H48a16 16 0 00-16 16v66h448V96a16 16 0 00-16-16z" />
      </svg>
    );
  },
);

CardSharp.displayName = "CardSharp";

import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const CaretBackSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M368 64L144 256l224 192V64z" />
      </svg>
    );
  },
);

CaretBackSharp.displayName = "CaretBackSharp";

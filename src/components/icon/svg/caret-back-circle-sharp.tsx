import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const CaretBackCircleSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm252 108.27L169.91 256 300 147.73z" />
      </svg>
    );
  },
);

CaretBackCircleSharp.displayName = "CaretBackCircleSharp";

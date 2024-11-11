import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const CaretForwardSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M144 448l224-192L144 64v384z" />
      </svg>
    );
  },
);

CaretForwardSharp.displayName = "CaretForwardSharp";

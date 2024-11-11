import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PencilSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M103 464H48v-55L358.14 98.09l55.77 55.78L103 464zM425.72 142L370 86.28l31.66-30.66C406.55 50.7 414.05 48 421 48a25.91 25.91 0 0118.42 7.62l17 17A25.87 25.87 0 01464 91c0 7-2.71 14.45-7.62 19.36zm-7.52-70.83z" />
      </svg>
    );
  },
);

PencilSharp.displayName = "PencilSharp";

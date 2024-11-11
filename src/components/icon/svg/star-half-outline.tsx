import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const StarHalfOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path
          d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <path d="M256 48v316L118 464l54-160-140-96h172l52-160z" />
      </svg>
    );
  },
);

StarHalfOutline.displayName = "StarHalfOutline";

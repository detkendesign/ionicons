import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ManSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <circle cx="256" cy="56" r="56" />
        <path d="M336 128H176a32 32 0 00-32 32v160h48V192h8v320h52V328h8v184h52V192h8v128h48V160a32 32 0 00-32-32z" />
      </svg>
    );
  },
);

ManSharp.displayName = "ManSharp";

import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const FilterCircle = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm32 304h-64a16 16 0 010-32h64a16 16 0 010 32zm48-64H176a16 16 0 010-32h160a16 16 0 010 32zm32-64H144a16 16 0 010-32h224a16 16 0 010 32z" />
      </svg>
    );
  },
);

FilterCircle.displayName = "FilterCircle";

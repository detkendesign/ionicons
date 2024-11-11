import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const FilterCircleSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm48 304h-96v-32h96zm48-64H160v-32h192zm32-64H128v-32h256z" />
      </svg>
    );
  },
);

FilterCircleSharp.displayName = "FilterCircleSharp";

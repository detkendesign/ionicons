import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const CompassSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <circle cx="256" cy="256" r="24" />
        <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm48 256l-160 64 64-160 160-64z" />
      </svg>
    );
  },
);

CompassSharp.displayName = "CompassSharp";

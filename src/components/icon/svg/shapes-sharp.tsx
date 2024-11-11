import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ShapesSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M363.27 336H4.73L184 16z" />
        <path d="M336 160a160.54 160.54 0 00-32.55 3.36l87.75 157L417.81 368H183.36C203.8 432.85 264.49 480 336 480c88.22 0 160-71.78 160-160s-71.78-160-160-160z" />
      </svg>
    );
  },
);

ShapesSharp.displayName = "ShapesSharp";

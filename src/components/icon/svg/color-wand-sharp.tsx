import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ColorWandSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M133.441 200.647l67.197-67.196 78.142 78.142-67.196 67.196zM301.41 234.21l-67.19 67.2L412 480l68-68-178.59-177.79zM32 176h80v32H32zM67.624 90.25l22.627-22.628 56.569 56.569-22.627 22.627zM176 32h32v80h-32zM237.32 124.195l56.569-56.569 22.627 22.627-56.569 56.569zM67.62 293.887l56.569-56.569 22.627 22.627-56.569 56.569z" />
      </svg>
    );
  },
);

ColorWandSharp.displayName = "ColorWandSharp";

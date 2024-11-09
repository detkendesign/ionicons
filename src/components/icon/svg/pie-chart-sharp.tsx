import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PieChartSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M58 362.09l-6.51-14.59A224 224 0 01256 32h16v234.37z" />
        <path d="M304 66.46v220.65L94.62 380.78A208.31 208.31 0 00272 480c114.69 0 208-93.31 208-208 0-103.81-76.45-190.1-176-205.54z" />
      </svg>
    );
  },
);

PieChartSharp.displayName = "PieChartSharp";

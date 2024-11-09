import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const SwapHorizontalOutline = forwardRef<
  SVGSVGElement,
  DefaultIconProps
>(({ width, size, height, ...props }, ref) => {
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
        d="M304 48l112 112-112 112M398.87 160H96M208 464L96 352l112-112M114 352h302"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
});

SwapHorizontalOutline.displayName = "SwapHorizontalOutline";

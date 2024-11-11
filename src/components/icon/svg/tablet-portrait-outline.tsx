import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const TabletPortraitOutline = forwardRef<
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
      <rect
        height="480"
        width="352"
        fill="none"
        rx="48"
        ry="48"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        x="80"
        y="16"
      />
    </svg>
  );
});

TabletPortraitOutline.displayName = "TabletPortraitOutline";

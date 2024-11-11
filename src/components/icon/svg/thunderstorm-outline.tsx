import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ThunderstormOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M120 352l-24 48M136 432l-16 32M400 352l-24 48M416 432l-16 32M208 304l-16 96h48v80l80-112h-48l16-64M404.33 152.89H392.2C384.71 84.85 326.14 32 256 32a136.39 136.39 0 00-128.63 90.67h-4.57c-49.94 0-90.8 40.8-90.8 90.66h0C32 263.2 72.86 304 122.8 304h281.53C446 304 480 270 480 228.44h0c0-41.55-34-75.55-75.67-75.55z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

ThunderstormOutline.displayName = "ThunderstormOutline";

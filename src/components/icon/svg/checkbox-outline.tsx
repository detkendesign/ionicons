import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const CheckboxOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M352 176L217.6 336 160 272"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
        <rect
          height="384"
          width="384"
          fill="none"
          rx="48"
          ry="48"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
          x="64"
          y="64"
        />
      </svg>
    );
  },
);

CheckboxOutline.displayName = "CheckboxOutline";

import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ShapesOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M336 320H32L184 48l152 272zM265.32 194.51A144 144 0 11192 320"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

ShapesOutline.displayName = "ShapesOutline";

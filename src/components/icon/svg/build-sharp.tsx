import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const BuildSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M230 209.2L32 405.58 106.65 480l197.59-198.17c46.47 17.46 105.52 12.54 143-24.78 40.44-40.32 40.35-108 16.81-156.79l-87.33 87.06-52.32-52.13 87.33-87.06C363 24.46 294.67 24.34 254.23 64.66c-38.03 37.91-42.78 97.6-24.23 144.54z" />
      </svg>
    );
  },
);

BuildSharp.displayName = "BuildSharp";

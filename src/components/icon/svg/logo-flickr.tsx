import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const LogoFlickr = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M256 32C132.8 32 32 132.8 32 256s100.8 224 224 224 224-100.8 224-224S379.2 32 256 32zm-82.16 280A56 56 0 11228 257.84 56 56 0 01173.84 312zm168 0A56 56 0 11396 257.84 56 56 0 01341.84 312z" />
      </svg>
    );
  },
);

LogoFlickr.displayName = "LogoFlickr";

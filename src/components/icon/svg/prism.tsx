import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const Prism = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M487.83 319.44L295.63 36.88a48 48 0 00-79.26 0L24.17 319.44a47.1 47.1 0 0016.93 68.13l192.2 102.75a48.05 48.05 0 0045.4 0l192.2-102.75a47.1 47.1 0 0016.93-68.13zm-431.26 41a16.12 16.12 0 01-8-10.38 16.8 16.8 0 012.37-13.62L232.66 69.26c2.18-3.21 7.34-1.72 7.34 2.13v374c0 5.9-6.54 9.63-11.87 6.78z" />
      </svg>
    );
  },
);

Prism.displayName = "Prism";